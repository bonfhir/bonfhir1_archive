import { build, isFhirResource, utcNow } from "@bonfhir/core/r4b";
import {
  CodeSystemURIs,
  DetectedIssueCategory,
  KnownIdentifierSystems,
  ObservationStatus,
} from "@bonfhir/terminology/r4b";
import { Bundle, DetectedIssue, Medication, Reference } from "fhir/r4";
import { evaluate as fhirPath } from "fhirpath";
import _ from "lodash";
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
  const rxcuis = _(getRxcuis(args)).uniq().compact().value();

  if (rxcuis?.length < 2) {
    throw new Error(
      "Unable to find drug interactions if the list of drugs is < 2."
    );
  }

  const drugInteractionsSearchParams = new URLSearchParams();
  drugInteractionsSearchParams.set("rxcuis", rxcuis.join(" "));
  const fetchUrl = new URL(
    args.drugInteractionsListApiUrl || DRUG_INTERACTIONS_LIST_API_URL
  );
  fetchUrl.search = drugInteractionsSearchParams.toString();

  const response = (await (
    await fetch(fetchUrl.href)
  ).json()) as DrugInteractionListResponse;

  return {
    issues: _.compact(
      (response.fullInteractionTypeGroup || []).flatMap((x) =>
        (x.fullInteractionType || []).flatMap(
          mapFullInteractionTypeToDetectedIssue
        )
      )
    ),
  };
}

function getRxcuis(args: FindDrugInteractionsIssuesArgs): string[] {
  if (isFindDrugInteractionsIssuesArgsMedications(args)) {
    const medicationBundle = isFhirResource("Bundle", args.medications)
      ? args.medications
      : build("Bundle", {
          type: "collection",
          entry: args.medications.map((resource) => ({
            resource,
          })),
        });

    return (
      fhirPath(
        medicationBundle,
        `Bundle.select(entry.resource.code.coding).where(system = '${CodeSystemURIs.RxNorm}').select(code)`
      ) || ([] as string[])
    );
  }

  return args.rxcuis;
}

function mapFullInteractionTypeToDetectedIssue(
  fullInteractionType: FullInteractionType
): DetectedIssue[] {
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
        implicated: (fullInteractionType.minConcept || []).map(
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
