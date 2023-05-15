/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  build,
  buildCodeableConcept,
  buildReferenceFromResource,
  createOr,
  CreateOrMergeAction,
  FhirRestfulClient,
  toMap,
  utcNow,
} from "@bonfhir/core/r4b";
import {
  CodeSystemURIs,
  ContactPointSystem,
  KnownIdentifierSystems,
  MedicationKnowledgeStatusCodes,
  MedicationStatusCodes,
  OrganizationType,
  ProvenanceParticipantType,
} from "@bonfhir/terminology/r4b";
import {
  Bundle,
  Coding,
  FhirResource,
  Medication,
  MedicationKnowledge,
  Organization,
  Provenance,
  Ratio,
  Reference,
} from "fhir/r4";
import { URLSearchParams } from "url";
import { AllProperties, NDCProperties } from "./rxnorm-models";

export interface RxNormSyncSessionOptions {
  /**
   * The FHIR client to use to perform the sync operations.
   */
  client: FhirRestfulClient;

  /**
   * Base RxNorm API URL.
   * Defaults to {@link RX_NORM_API_URL}
   */
  rxNormAPIBaseUrl?: string | null | undefined;

  /**
   * The provenance template to use when building provenance information.
   * Use "no-provenance" to disable provenance tracking.
   */
  provenance?: Partial<Provenance> | "no-provenance" | null | undefined;

  /**
   * The stable id to use on merge operations for elements inside resources.
   */
  stableId?: string | null | undefined;

  /**
   * Callback that allows customization of resources when they are built.
   */
  onResourceBuild?:
    | ((resource: FhirResource) => FhirResource)
    | null
    | undefined;
}

export const RX_NORM_API_URL = "https://rxnav.nlm.nih.gov/REST/";

export const NIH_NLM_IDENTIFIER_VALUE = "https://www.nlm.nih.gov/";

/**
 * This represents a session for syncing information from the NLM RXNorm API.
 * @see https://lhncbc.nlm.nih.gov/RxNav/APIs/RxNormAPIs.html
 */
export class RxNormSyncSession {
  private client: FhirRestfulClient;
  public rxNormAPIBaseUrl: URL;
  public provenance: Partial<Provenance> | "no-provenance" | undefined;
  private nihNlmOrganization: Organization | undefined;
  public stableId: string;
  private onResourceBuild: <TResource extends FhirResource>(
    resource: TResource
  ) => TResource;

  public constructor(options: RxNormSyncSessionOptions) {
    this.client = options.client;
    this.rxNormAPIBaseUrl = new URL(
      options.rxNormAPIBaseUrl || RX_NORM_API_URL
    );
    this.provenance = options.provenance || undefined;
    this.stableId = options.stableId || "rx-norm";
    this.onResourceBuild = (options.onResourceBuild ||
      ((resource) => resource)) as typeof this.onResourceBuild;
  }

  public async syncAllProperties(
    search: SearchAllProperties,
    createOrMergeAction: CreateOrMergeAction = "return"
  ): Promise<SyncAllPropertiesResult | undefined> {
    const [allProperties, ndcProperties] = await this.searchAllProperties(
      search
    );
    if (!allProperties.propConceptGroup?.propConcept?.length) {
      return undefined;
    }

    const indexedAllProperties: Record<
      "ATTRIBUTES" | "CODES" | "NAMES",
      Record<string, string>
    > = {
      ATTRIBUTES: {},
      CODES: {},
      NAMES: {},
    };

    for (const property of allProperties.propConceptGroup.propConcept) {
      indexedAllProperties[property.propCategory][property.propName] =
        property.propValue;
    }

    const ingredientsAndCode =
      allProperties.propConceptGroup.propConcept.reduce(
        (acc, current) => {
          if (current.propName === "Active_ingredient_name") {
            acc.names.push(current.propValue);
          }

          if (current.propName === "Active_ingredient_RxCUI") {
            acc.codes.push(current.propValue);
          }

          return acc;
        },
        { names: [], codes: [] } as { names: string[]; codes: string[] }
      );

    const ingredients = ingredientsAndCode.names
      .map((name, i) => {
        if (
          ingredientsAndCode.names.length !== ingredientsAndCode.codes.length
        ) {
          throw new Error("Ingredients and codes length mismatch");
        }

        return {
          name,
          code: ingredientsAndCode.codes[i],
        };
      })
      .map((ingredient) => {
        return {
          id: this.stableId,
          itemCodeableConcept: buildCodeableConcept({
            coding: [
              {
                system: CodeSystemURIs.RxNorm,
                code: ingredient.code,
                display: ingredient.name,
              },
            ],
          }),
          isActive: true,
          strength: this.parseStrength(
            indexedAllProperties["ATTRIBUTES"]["AVAILABLE_STRENGTH"]
          ),
        };
      });

    const bundle = build("Bundle", {
      type: "collection",
      entry: [],
    }) as Bundle<Medication | MedicationKnowledge | Provenance | Organization>;

    const provenanceResult = await this.ensureProvenance();
    if (provenanceResult.organization) {
      bundle.entry?.push({
        resource: provenanceResult.organization,
        search: {
          mode: "include",
        },
      });
    }

    const [result] = await createOr(
      createOrMergeAction,
      this.client,
      this.onResourceBuild(
        build("Medication", {
          code: buildCodeableConcept({
            coding: [
              indexedAllProperties["CODES"]["RxCUI"]
                ? {
                    system: CodeSystemURIs.RxNorm,
                    code: indexedAllProperties["CODES"]["RxCUI"],
                    display: indexedAllProperties["NAMES"]["RxNorm Name"],
                  }
                : undefined,
              indexedAllProperties["CODES"]["SNOMEDCT"]
                ? {
                    system: CodeSystemURIs.SNOMED_CT_INT,
                    code: indexedAllProperties["CODES"]["SNOMEDCT"],
                  }
                : undefined,
            ].filter(Boolean) as Coding[],
          }),
          status: MedicationStatusCodes.values.Active.code,
          ingredient: ingredients,
        })
      ),
      (search) =>
        search.code(
          [
            {
              system: CodeSystemURIs.RxNorm,
              value: indexedAllProperties["CODES"]["RxCUI"],
            },
            indexedAllProperties["CODES"]["SNOMEDCT"]
              ? {
                  system: CodeSystemURIs.SNOMED_CT_INT,
                  value: indexedAllProperties["CODES"]["SNOMEDCT"],
                }
              : undefined,
          ].filter(Boolean) as Array<{ system: string; value: string }>
        )
    );

    bundle.entry?.push({ resource: result, search: { mode: "match" } });

    let medicationKnowledge: MedicationKnowledge | undefined = undefined;
    if (ndcProperties?.ndcPropertyList?.ndcProperty?.[0]) {
      const ndcProps = ndcProperties.ndcPropertyList.ndcProperty[0];
      const indexedProps = toMap(
        ndcProps.propertyConceptList.propertyConcept,
        (X) => X.propName
      );
      [medicationKnowledge] = await createOr(
        "return",
        this.client,
        this.onResourceBuild(
          build("MedicationKnowledge", {
            code: buildCodeableConcept({
              coding: [
                {
                  system: CodeSystemURIs.Ndc,
                  code: ndcProps.ndcItem,
                  display: ndcProps.packagingList?.packaging?.join(", "),
                },
              ],
            }),
            status:
              indexedProps.get("MARKETING_STATUS")?.propValue === "ACTIVE"
                ? MedicationKnowledgeStatusCodes.values.Active.code
                : undefined,
            associatedMedication: [buildReferenceFromResource(result)],
            ingredient: result.ingredient,
          })
        ),
        (search) =>
          search.code({
            system: CodeSystemURIs.Ndc,
            value: ndcProps.ndcItem,
          })
      );

      bundle.entry?.push({
        resource: medicationKnowledge,
        search: { mode: "include" },
      });
    }

    if (provenanceResult.provenance) {
      const [provenance] = await createOr(
        "return",
        this.client,
        this.onResourceBuild(
          build("Provenance", {
            agent: [],
            ...provenanceResult.provenance,
            recorded: utcNow().toISOString(),
            target: [
              buildReferenceFromResource(result!),
              medicationKnowledge
                ? buildReferenceFromResource(medicationKnowledge)
                : undefined,
            ].filter(Boolean) as Reference[],
          })
        ),
        (search) =>
          search.target({ type: result!.resourceType, id: result!.id! }).agent({
            type: provenanceResult.provenance!.agent![0]!.who!.type!,
            id: provenanceResult.provenance!.agent![0]!.who!.reference!,
          })
      );
      bundle.entry?.push({
        resource: provenance,
        search: {
          mode: "include",
        },
      });
    }

    return {
      result: result!,
      bundle,
    };
  }

  public async searchAllProperties(
    search: SearchAllProperties
  ): Promise<[AllProperties, NDCProperties | undefined]> {
    let rxcuis = (search as SearchAllPropertiesByRxcui).rxcui
      ? [(search as SearchAllPropertiesByRxcui).rxcui]
      : undefined;
    let ndcProperties: NDCProperties | undefined = undefined;
    if (!rxcuis) {
      const ndc = (search as SearchAllPropertiesByNDC).ndc;

      const fetchNDCPropertiesURL = new URL(
        `ndcproperties.json`,
        this.rxNormAPIBaseUrl
      );
      const ndcPropertiesSearchParams = new URLSearchParams();
      ndcPropertiesSearchParams.set("id", ndc.padStart(11, "0"));
      fetchNDCPropertiesURL.search = ndcPropertiesSearchParams.toString();
      ndcProperties = (await (
        await fetch(fetchNDCPropertiesURL.href)
      ).json()) as NDCProperties;

      if (!ndcProperties.ndcPropertyList?.ndcProperty?.[0]?.rxcui) {
        return [{}, ndcProperties];
      }

      rxcuis = ndcProperties.ndcPropertyList.ndcProperty
        .map((x) => x.rxcui)
        .filter(Boolean);
    }

    for (const rxcui of rxcuis) {
      const fetchAllPropertiesURL = new URL(
        `rxcui/${rxcui}/allProperties.json`,
        this.rxNormAPIBaseUrl
      );
      const allPropertiesSearchParams = new URLSearchParams();
      allPropertiesSearchParams.set("prop", "names+codes+attributes");
      fetchAllPropertiesURL.search = decodeURIComponent(
        allPropertiesSearchParams.toString()
      );

      const allPropertyResults = (await (
        await fetch(fetchAllPropertiesURL.href)
      ).json()) as AllProperties;

      if (allPropertyResults.propConceptGroup) {
        return [allPropertyResults, ndcProperties];
      }
    }

    return [{}, ndcProperties];
  }

  private parseStrength(strength: string | undefined): Ratio | undefined {
    if (!strength) {
      return undefined;
    }

    const match = strength.match(/^(?<number>\d+)\s+(?<unit>[a-zA-Z]+)$/);
    if (match) {
      return {
        id: this.stableId,
        numerator: {
          value: parseFloat(match.groups!["number"]!),
          system: CodeSystemURIs.UCUM,
          code: match.groups!["unit"]!,
        },
      };
    }
  }

  private async ensureProvenance(): Promise<{
    provenance?: Partial<Provenance> | undefined;
    organization?: Organization | undefined;
  }> {
    if (this.provenance) {
      return this.provenance === "no-provenance"
        ? {}
        : {
            provenance: this.provenance,
            organization: this.nihNlmOrganization,
          };
    }

    [this.nihNlmOrganization] = await createOr(
      "return",
      this.client,
      this.onResourceBuild(
        build("Organization", {
          identifier: [
            {
              ...KnownIdentifierSystems.URI,
              value: NIH_NLM_IDENTIFIER_VALUE,
            },
          ],
          name: "National Library of Medicine (NLM)",
          alias: ["NLM"],
          type: [OrganizationType.values.Government.codeableConcept],
          contact: [
            {
              telecom: [
                {
                  system: ContactPointSystem.values.Email.code,
                  value: "rxnorminfo@nlm.nih.gov",
                },
              ],
            },
          ],
        })
      )
    );

    this.provenance = {
      agent: [
        {
          type: ProvenanceParticipantType.values.Author.codeableConcept,
          who: buildReferenceFromResource(this.nihNlmOrganization),
        },
      ],
    };

    return {
      organization: this.nihNlmOrganization,
      provenance: this.provenance,
    };
  }
}

export type SearchAllProperties =
  | SearchAllPropertiesByRxcui
  | SearchAllPropertiesByNDC;

export interface SearchAllPropertiesByRxcui {
  rxcui: string;
}

export interface SearchAllPropertiesByNDC {
  ndc: string;
}

export interface SyncAllPropertiesResult {
  result: Medication;
  bundle: Bundle<Medication | MedicationKnowledge | Provenance | Organization>;
}
