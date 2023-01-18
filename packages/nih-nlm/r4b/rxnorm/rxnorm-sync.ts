/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  build,
  buildCodeableConcept,
  buildReferenceFromResource,
  createOr,
  FhirRestfulClient,
  resourceSearch,
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
  Medication,
  MedicationKnowledge,
  Organization,
  Provenance,
  Ratio,
} from "fhir/r4";
import _ from "lodash";
import { URLSearchParams } from "url";
import { AllProperties, NDCProperties } from "./rxnorm-models";

export interface RxNormSyncSessionOptions {
  client: FhirRestfulClient;
  rxNormAPIBaseUrl?: string | null | undefined;
  provenance?: Partial<Provenance> | "no-provenance" | null | undefined;
  stableId?: string | null | undefined;
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

  public constructor(options: RxNormSyncSessionOptions) {
    this.client = options.client;
    this.rxNormAPIBaseUrl = new URL(
      options.rxNormAPIBaseUrl || RX_NORM_API_URL
    );
    this.provenance = options.provenance || undefined;
    this.stableId = options.stableId || "rx-norm";
  }

  public async syncAllProperties(
    search: SearchAllProperties
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
      "return",
      this.client,
      build("Medication", {
        code: buildCodeableConcept({
          coding: _.compact([
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
          ]),
        }),
        status: MedicationStatusCodes.values.Active.code,
        ingredient: indexedAllProperties["ATTRIBUTES"][
          "Active_ingredient_RxCUI"
        ]
          ? [
              {
                id: this.stableId,
                itemCodeableConcept: buildCodeableConcept({
                  coding: [
                    {
                      system: CodeSystemURIs.RxNorm,
                      code: indexedAllProperties["ATTRIBUTES"][
                        "Active_ingredient_RxCUI"
                      ],
                      display:
                        indexedAllProperties["ATTRIBUTES"][
                          "Active_ingredient_name"
                        ],
                    },
                  ],
                }),
                isActive: true,
                strength: this.parseStrength(
                  indexedAllProperties["ATTRIBUTES"]["AVAILABLE_STRENGTH"]
                ),
              },
            ]
          : undefined,
      }),
      resourceSearch("Medication").code(
        _.compact([
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
        ])
      ).href
    );

    bundle.entry?.push({ resource: result, search: { mode: "match" } });

    let medicationKnowledge: MedicationKnowledge | undefined = undefined;
    if (ndcProperties?.ndcPropertyList?.ndcProperty?.[0]) {
      const ndcProps = ndcProperties.ndcPropertyList.ndcProperty[0];
      const indexedProps = _.keyBy(
        ndcProps.propertyConceptList.propertyConcept,
        "propName"
      );
      [medicationKnowledge] = await createOr(
        "return",
        this.client,
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
            indexedProps["MARKETING_STATUS"]?.propValue === "ACTIVE"
              ? MedicationKnowledgeStatusCodes.values.Active.code
              : undefined,
          associatedMedication: [buildReferenceFromResource(result)],
          ingredient: result.ingredient,
        }),
        resourceSearch("MedicationKnowledge").code({
          system: CodeSystemURIs.Ndc,
          value: ndcProps.ndcItem,
        }).href
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
        build("Provenance", {
          agent: [],
          ...provenanceResult.provenance,
          recorded: utcNow().toISOString(),
          target: _.compact([
            buildReferenceFromResource(result!),
            medicationKnowledge
              ? buildReferenceFromResource(medicationKnowledge)
              : undefined,
          ]),
        }),
        resourceSearch("Provenance")
          .target({ type: result!.resourceType, id: result!.id! })
          .agent({
            type: provenanceResult.provenance.agent![0]!.who!.type!,
            id: provenanceResult.provenance.agent![0]!.who!.reference!,
          }).href
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

      rxcuis = _.compact(
        ndcProperties.ndcPropertyList.ndcProperty.map((x) => x.rxcui)
      );
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
