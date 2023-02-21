import {
  build,
  buildReferenceFromResource,
  isFhirResource,
  utcNow,
} from "@bonfhir/core/r4b";
import {
  CodeSystemURIs,
  DetectedIssueCategory,
  KnownIdentifierSystems,
  ObservationStatus,
} from "@bonfhir/terminology/r4b";
import { Bundle, DetectedIssue, Medication, Reference } from "fhir/r4";
import compact from "lodash/compact";
import {
  DrugInteractionListResponse,
  FullInteractionType,
} from "./drug-interactions-models";

export type FindDrugInteractionsIssuesArgs =
  FindDrugInteractionsIssuesArgsBase &
    (
      | FindDrugInteractionsIssuesArgsRxCuis
      | FindDrugInteractionsIssuesArgsMedications
    );

export type FindDrugInteractionsIssuesArgsBase = {
  /**
   * The api endpoint used to list drug interactions.
   * Defaults to https://rxnav.nlm.nih.gov/REST/interaction/list.json
   */
  drugInteractionsListApiUrl?: string | null | undefined;
};

export type FindDrugInteractionsIssuesArgsRxCuis = {
  /**
   * The list of rxcuis to identify interactions from.
   */
  rxcuis: string[];
};

export type FindDrugInteractionsIssuesArgsMedications = {
  /**
   * The list of `Medication` to identify interactions from.
   *
   * IMPORTANT: These Medication must be coded using RxNorm.
   * (e.g. use the "http://www.nlm.nih.gov/research/umls/rxnorm" - {@link CodeSystemURIs.RxNorm} system for their codes)
   * We recommend using the {@link RxNormSyncSession} to create these in the first place.
   *
   * If you are ensure, you should pass the rxcuis directly instead.
   */
  medications: Bundle<Medication> | Medication[];
};

function isFindDrugInteractionsIssuesArgsMedications(
  value: FindDrugInteractionsIssuesArgs
): value is FindDrugInteractionsIssuesArgsBase &
  FindDrugInteractionsIssuesArgsMedications {
  return !!(value as FindDrugInteractionsIssuesArgsMedications).medications;
}

export interface FindDrugInteractionsIssuesResult {
  issues: DetectedIssue[];
}

export const DRUG_INTERACTIONS_LIST_API_URL =
  "https://rxnav.nlm.nih.gov/REST/interaction/list.json";

/**
 * Return `DetectedIssue` in case of drug interactions problem for a list of medication identified by their rxcui.
 * @throw Error if the list of rxcuis is shorter than 2.
 */
export async function findDrugInteractionsIssues(
  args: FindDrugInteractionsIssuesArgs
): Promise<FindDrugInteractionsIssuesResult> {
  const medicationsByRxcui = getMedicationsByRxcui(args);

  if (Object.keys(medicationsByRxcui).length < 2) {
    throw new Error(
      "Unable to find drug interactions if the list of drugs is < 2."
    );
  }

  const drugInteractionsSearchParams = new URLSearchParams();
  drugInteractionsSearchParams.set(
    "rxcuis",
    Object.keys(medicationsByRxcui).join(" ")
  );
  const fetchUrl = new URL(
    args.drugInteractionsListApiUrl || DRUG_INTERACTIONS_LIST_API_URL
  );
  fetchUrl.search = drugInteractionsSearchParams.toString();

  const response = (await (
    await fetch(fetchUrl.href)
  ).json()) as DrugInteractionListResponse;

  let medicationArgs = isFindDrugInteractionsIssuesArgsMedications(args)
    ? args.medications
    : undefined;
  if (isFhirResource("Bundle", medicationArgs)) {
    medicationArgs =
      compact(medicationArgs.entry?.map((x) => x.resource)) || [];
  }

  return {
    issues: compact(
      (response.fullInteractionTypeGroup || []).flatMap((x) =>
        (x.fullInteractionType || []).flatMap((fullInteractionType) =>
          mapFullInteractionTypeToDetectedIssue(
            fullInteractionType,
            medicationsByRxcui
          )
        )
      )
    ),
  };
}

function getMedicationsByRxcui(
  args: FindDrugInteractionsIssuesArgs
): Record<string, Medication | undefined> {
  if (isFindDrugInteractionsIssuesArgsMedications(args)) {
    const medications = compact(
      isFhirResource("Bundle", args.medications)
        ? args.medications.entry?.map((x) => x.resource)
        : args.medications
    );

    return medications.reduce((acc, cur) => {
      const rxNormCode = cur.code?.coding?.find(
        (x) => x.system === CodeSystemURIs.RxNorm
      );
      if (rxNormCode?.code) {
        acc[rxNormCode.code] = cur;
      }
      return acc;
    }, {} as Record<string, Medication | undefined>);
  } else {
    return args.rxcuis.reduce((acc, cur) => {
      acc[cur] = undefined;
      return acc;
    }, {} as Record<string, Medication | undefined>);
  }
}

function mapFullInteractionTypeToDetectedIssue(
  fullInteractionType: FullInteractionType,
  medicationsByRxcui: Record<string, Medication | undefined>
): DetectedIssue[] {
  const medications = compact(
    (fullInteractionType.minConcept || []).map((concept) =>
      concept.rxcui
        ? {
            medication: medicationsByRxcui[concept.rxcui],
            display: concept.name,
          }
        : undefined
    )
  );
  return (fullInteractionType.interactionPair || []).map(
    (interactionPair): DetectedIssue =>
      build("DetectedIssue", {
        status: ObservationStatus.values.Registered.code,
        code: DetectedIssueCategory.values["Drug Interaction Alert"]
          .codeableConcept,
        severity: mapSeverity(interactionPair.severity),
        author: {
          identifier: {
            ...KnownIdentifierSystems.URI,
            value: "https://lhncbc.nlm.nih.gov/RxNav/APIs/InteractionAPIs.html",
          },
        },
        identifiedDateTime: utcNow().toISOString(),
        implicated: medications.length
          ? medications.map((med) => ({
              ...buildReferenceFromResource(med.medication),
              display: med.display,
            }))
          : (fullInteractionType.minConcept || []).map(
              (concept): Reference => ({
                display: concept.name,
                identifier: {
                  system: CodeSystemURIs.RxNorm,
                  value: concept.rxcui,
                },
              })
            ),
        detail: interactionPair.description,
        reference: interactionPair.interactionConcept?.find(
          (x) => !!x.sourceConceptItem?.url
        )?.sourceConceptItem?.url,
      })
  );
}

function mapSeverity(
  severity: string | undefined
): "high" | "moderate" | "low" | undefined {
  if (severity) {
    const normalizedSeverity = severity.trim().toLowerCase();

    if (normalizedSeverity.includes("high")) {
      return "high";
    }

    if (
      normalizedSeverity.includes("medium") ||
      normalizedSeverity.includes("moderate")
    ) {
      return "moderate";
    }

    if (normalizedSeverity.includes("low")) {
      return "low";
    }
  }

  return undefined;
}
