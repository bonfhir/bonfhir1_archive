import { buildReferenceFromResource } from "@bonfhir/core/r4b";
import { ConceptMap, Condition, Patient, Reference } from "fhir/r4";
import _ from "lodash";
import { CharlsonComorbidityIndexCode } from "./terminology";

export interface CharlsonComorbidityIndexArgs {
  /**
   * The Patient profile.
   */
  patient: Patient;

  /**
   * The list of known, existing and current medical conditions.
   */
  conditions: Condition[];

  /**
   * The mapping between the `CharlsonComorbidityIndexCode` and the `Condition` codes.
   */
  cciConceptMap: ConceptMap;
}

export type CharlsonComorbidityIndexResult =
  | CharlsonComorbidityIndexResultSuccess
  | CharlsonComorbidityIndexResultError;

export interface CharlsonComorbidityIndexResultSuccess {
  status: "success";

  /**
   * The CCI score (between 0 and  37).
   */
  score: number;

  /**
   * Estimated 10-year survival (as a percentage - between 0 and 1).
   */
  tenYearSurvivalRate: number;

  /**
   * The details of the score for each CCI code.
   */
  detailedScores: Record<CharlsonComorbidityIndexCode, number>;

  /**
   * References to all the inputs that where actually used for the score.
   */
  basedOn: Reference[];
}

export interface CharlsonComorbidityIndexResultError {
  status: "error";
  errorCode: CharlsonComorbidityIndexErrorCode;
  errorMessage: string;
}

export type CharlsonComorbidityIndexErrorCode =
  | "missing-patient"
  | "missing-conditions"
  | "missing-conceptmap"
  | "invalid-conceptmap";

/**
 * Computes a Charlson Comorbidity Index (w/ 10 year survival rate).
 *
 * In order to work, you must provide:
 *   - the patient profile with its age
 *   - the list of `Condition` that are current and active; you may use the `$current-problems` list if you are using it
 *   - a mapping (`ConceptMap`) between CCI codes (listed in {@link CharlsonComorbidityIndexCodePoints}) and the code used in your `Condition`
 *
 * @see https://doi.org/10.1016/0021-9681(87)90171-8
 */
export function computeCharlsonComorbidityIndex({
  patient,
  conditions,
  cciConceptMap,
}: CharlsonComorbidityIndexArgs): CharlsonComorbidityIndexResult {
  if (!patient) {
    return {
      status: "error",
      errorCode: "missing-patient",
      errorMessage: "Patient is missing",
    };
  }

  if (!conditions?.length) {
    return {
      status: "error",
      errorCode: "missing-conditions",
      errorMessage: "No conditions where provided.",
    };
  }

  if (!cciConceptMap || !cciConceptMap.group?.[0]?.element?.length) {
    return {
      status: "error",
      errorCode: "missing-conceptmap",
      errorMessage:
        "No CCI ConceptMap was provided, or the ConceptMap has no elements.",
    };
  }

  const conceptMapElementCodes = _(cciConceptMap.group || [])
    .flatMap((x) => x.element || [])
    .flatMap((x) => x.code)
    .compact()
    .uniq()
    .value();

  if (
    !_.isEmpty(
      _.xor(
        conceptMapElementCodes,
        Object.values(CharlsonComorbidityIndexCode).filter((x) => x !== "age")
      )
    )
  ) {
    return {
      status: "error",
      errorCode: "invalid-conceptmap",
      errorMessage: `No the concept map is missing the following element codes: ${_.xor(
        conceptMapElementCodes,
        Object.values(CharlsonComorbidityIndexCode).filter((x) => x !== "age")
      ).join(", ")}.`,
    };
  }

  const allScoreExceptAge = computeScores(cciConceptMap, conditions);

  const detailedScores: Record<CharlsonComorbidityIndexCode, number> = {
    age: computeAgeScore(patient),
    ...allScoreExceptAge.scores,
  };

  const score = _.sum(Object.values(detailedScores));
  const tenYearSurvivalRate =
    Math.round(
      (Math.pow(0.983, Math.pow(Math.E, score * 0.9)) + Number.EPSILON) * 100
    ) / 100;

  return {
    status: "success",
    score,
    tenYearSurvivalRate,
    detailedScores,
    basedOn: _.compact([
      cciConceptMap.id && cciConceptMap.meta?.versionId
        ? buildReferenceFromResource(cciConceptMap, "version-specific")
        : undefined,
      ...allScoreExceptAge.basedOn,
    ]),
  };
}

function computeAgeScore(patient: Patient): number {
  if (!patient.birthDate) {
    return 0;
  }

  const age =
    new Date().getFullYear() - new Date(patient.birthDate).getFullYear();

  if (age < 50) {
    return 0;
  }

  if (age < 60) {
    return 1;
  }

  if (age < 70) {
    return 2;
  }

  if (age < 80) {
    return 3;
  }

  return 4;
}

function computeScores(
  cciConceptMap: ConceptMap,
  conditions: Condition[]
): {
  scores: Record<Exclude<CharlsonComorbidityIndexCode, "age">, number>;
  basedOn: Reference[];
} {
  const allConditionsByCodes = _(conditions)
    .flatMap((condition) =>
      (condition.code?.coding || []).map((coding) => ({
        condition,
        code: coding.code,
      }))
    )
    .keyBy("code")
    .value();

  const basedOn: Reference[] = [];
  const scores = Object.values(CharlsonComorbidityIndexCode).reduce(
    (acc, cur) => {
      if (cur !== "age") {
        acc[cur] = 0;
      }
      return acc;
    },
    {} as Record<Exclude<CharlsonComorbidityIndexCode, "age">, number>
  );

  for (const cciVariable of Object.keys(scores) as Exclude<
    CharlsonComorbidityIndexCode,
    "age"
  >[]) {
    const cciMapGroupElement = cciConceptMap.group
      ?.flatMap((x) => x.element)
      .find((x) => x.code === cciVariable);
    if (!cciMapGroupElement) {
      continue;
    }

    const variableBasedOn: Reference[] = [];

    for (const targetElement of cciMapGroupElement.target || []) {
      if (targetElement.code && allConditionsByCodes[targetElement.code]) {
        variableBasedOn.push(
          buildReferenceFromResource(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            allConditionsByCodes[targetElement.code]!.condition
          )
        );
      }
    }

    if (variableBasedOn.length) {
      scores[cciVariable] = CharlsonComorbidityIndexCodePoints[cciVariable];
      basedOn.push(...variableBasedOn);
    }
  }

  return {
    scores,
    basedOn,
  };
}

/**
 * Mapping of CCI Variable and the number of points given.
 */
export const CharlsonComorbidityIndexCodePoints: Record<
  Exclude<CharlsonComorbidityIndexCode, "age">,
  number
> = {
  "myocardial-infarction": 1,
  "congestive-heart-failure": 1,
  "peripheral-vascular-disease": 1,
  "cerebrovascular-accident/transient-ischemic-attack": 1,
  dementia: 1,
  "chronic-obstructive-pulmonary-disease": 1,
  "connective-tissue-disease": 1,
  "peptic-ulcer-disease": 1,
  "mild-liver-disease": 1,
  "uncomplicated-diabetes": 1,
  hemiplegia: 2,
  "chronic-kidney-disease": 2,
  "diabetes-with-end-organ-damage": 2,
  "localized-solid-tumor": 2,
  leukemia: 2,
  lymphoma: 2,
  "moderate-to-severe-liver-disease": 3,
  "metastatic-solid-tumor": 6,
  aids: 6,
};
