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
  AddressType,
  AddressUse,
  ContactEntityType,
  ContactPointSystem,
  ContactPointUse,
  KnownIdentifierSystems,
  NameUse,
  OrganizationType,
  ProvenanceParticipantType,
} from "@bonfhir/terminology/r4b";
import {
  Address,
  Bundle,
  BundleEntry,
  ContactPoint,
  FhirResource,
  HealthcareService,
  Location,
  Organization,
  Practitioner,
  PractitionerQualification,
  Provenance,
} from "fhir/r4";
import _ from "lodash";
import {
  isPractitioner,
  NPIRegistryAddress,
  NPIRegistryResponse,
  NPIRegistryResult,
} from "./npiregistry-models";

export interface NPIRegistrySyncSessionOptions {
  /**
   * The FHIR client to use to perform the sync operations.
   */
  client: FhirRestfulClient;

  /**
   * Base NPI Registry API URL.
   * Defaults to {@link NPI_REGISTRY_API_URL}
   */
  npiRegistryBaseUrl?: string | null | undefined;

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

export const NPI_REGISTRY_API_URL =
  "https://npiregistry.cms.hhs.gov/api/?version=2.1";

export const CMS_DOT_GOV_IDENTIFIER_VALUE = "https://www.cms.gov/";

export interface SyncNPISearch {
  number: string;
}

export interface SyncNPIResult {
  result: Practitioner | Organization;
  bundle: Bundle<
    Practitioner | Organization | Provenance | HealthcareService | Location
  >;
}

/**
 * This represents a session for syncing information from the CMS.gov NPI registry.
 * @see https://npiregistry.cms.hhs.gov/api-page
 */
export class NPIRegistrySyncSession {
  private client: FhirRestfulClient;
  public npiRegistryBaseUrl: URL;
  public provenance: Partial<Provenance> | "no-provenance" | undefined;
  private cmsOrganization: Organization | undefined;
  public stateLocationsMapping: Record<string, Location> = {};
  public stableId: string;
  private onResourceBuild: <TResource extends FhirResource>(
    resource: TResource
  ) => TResource;

  public constructor(options: NPIRegistrySyncSessionOptions) {
    this.client = options.client;
    this.npiRegistryBaseUrl = new URL(
      options.npiRegistryBaseUrl || NPI_REGISTRY_API_URL
    );
    this.provenance = options.provenance || undefined;
    this.stableId = options.stableId || "npi-registry";
    this.onResourceBuild = (options.onResourceBuild ||
      ((resource) => resource)) as typeof this.onResourceBuild;
  }

  public async sync(search: SyncNPISearch): Promise<SyncNPIResult | undefined> {
    const response = await this.search(search);
    if (!response || !response.result_count || !response.results?.[0]) {
      return undefined;
    }

    const bundle = build("Bundle", {
      type: "collection",
      entry: [],
    }) as Bundle<
      Practitioner | Organization | Provenance | HealthcareService | Location
    >;

    const provenanceResult = await this.ensureProvenance();
    if (provenanceResult.organization) {
      bundle.entry?.push({
        resource: provenanceResult.organization,
        search: {
          mode: "include",
        },
      });
    }

    let result: Practitioner | Organization | undefined;
    for (const npiResult of response.results) {
      if (isPractitioner(npiResult.basic)) {
        [result] = await createOr(
          "merge",
          this.client,
          this.onResourceBuild(
            build("Practitioner", {
              active: npiResult.basic.status === "A",
              identifier: [
                {
                  ...KnownIdentifierSystems.USNationalProviderIdentifier,
                  value: npiResult.number,
                },
              ],
              name: [
                {
                  id: this.stableId,
                  use: NameUse.values.Official.code,
                  family: npiResult.basic.last_name,
                  given: [
                    npiResult.basic.first_name,
                    npiResult.basic.middle_name,
                  ].filter((x) => x?.trim()),
                },
              ],
              telecom: this.mapNPIRegistryAddressesToContactPoints(
                npiResult.addresses
              ),
              address: this.mapNPIRegistryAddressesToAddresses(
                npiResult.addresses
              ),
              qualification: (npiResult.taxonomies || []).map(
                (taxonomy): PractitionerQualification => ({
                  id: `${this.stableId}-${taxonomy.code}`,
                  code: buildCodeableConcept({
                    coding: [
                      {
                        system: "https://npidb.org/taxonomy",
                        code: taxonomy.code,
                        display: taxonomy.desc,
                      },
                    ],
                  }),
                })
              ),
            })
          )
        );
      } else {
        bundle.entry?.push(
          ...(await this.syncStatesAsLocation(response.results)).map(
            (
              resource
            ): BundleEntry<
              | Practitioner
              | Organization
              | Provenance
              | HealthcareService
              | Location
            > => ({
              resource,
              search: {
                mode: "include",
              },
            })
          )
        );

        [result] = await createOr(
          "merge",
          this.client,
          this.onResourceBuild(
            build("Organization", {
              active: npiResult.basic.status === "A",
              identifier: [
                {
                  ...KnownIdentifierSystems.USNationalProviderIdentifier,
                  value: npiResult.number,
                },
              ],
              name: npiResult.basic.organization_name,
              telecom: this.mapNPIRegistryAddressesToContactPoints(
                npiResult.addresses
              ),
              address: this.mapNPIRegistryAddressesToAddresses(
                npiResult.addresses
              ),
              contact: npiResult.basic.authorized_official_last_name.trim()
                ? [
                    {
                      id: this.stableId,
                      purpose:
                        ContactEntityType.values.Administrative.codeableConcept,
                      name: {
                        id: this.stableId,
                        use: NameUse.values.Official.code,
                        family:
                          npiResult.basic.authorized_official_last_name.trim(),
                        given: [
                          npiResult.basic.authorized_official_first_name,
                        ].filter((x) => x?.trim()),
                      },
                      telecom:
                        npiResult.basic.authorized_official_telephone_number.trim()
                          ? [
                              {
                                id: this.stableId,
                                system: ContactPointSystem.values.Phone.code,
                                use: ContactPointUse.values.Work.code,
                                value:
                                  npiResult.basic.authorized_official_telephone_number.trim(),
                              },
                            ]
                          : undefined,
                    },
                  ]
                : undefined,
            })
          )
        );

        for (const taxonomy of npiResult.taxonomies) {
          const [healthService] = await createOr(
            "merge",
            this.client,
            this.onResourceBuild(
              build("HealthcareService", {
                active: true,
                providedBy: buildReferenceFromResource(result),
                category: [
                  buildCodeableConcept({
                    coding: [
                      {
                        system: "https://npidb.org/taxonomy",
                        code: taxonomy.code,
                        display: taxonomy.desc,
                      },
                    ],
                  }),
                ],
                coverageArea:
                  taxonomy.state && this.stateLocationsMapping[taxonomy.state]
                    ? [
                        buildReferenceFromResource(
                          this.stateLocationsMapping[taxonomy.state]!
                        ),
                      ]
                    : undefined,
              })
            ),
            resourceSearch("HealthcareService")
              .organization({ type: "Organization", id: result.id! })
              .servicecategory({
                system: "https://npidb.org/taxonomy",
                code: taxonomy.code,
              }).href
          );
          bundle.entry?.push({
            resource: healthService,
            search: {
              mode: "include",
            },
          });
        }
      }
    }

    bundle.entry?.push({ resource: result, search: { mode: "include" } });

    if (provenanceResult.provenance) {
      const [provenance] = await createOr(
        "return",
        this.client,
        this.onResourceBuild(
          build("Provenance", {
            agent: [],
            ...provenanceResult.provenance,
            recorded: utcNow().toISOString(),
            target: [buildReferenceFromResource(result!)],
          })
        ),
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

  public async search(search: SyncNPISearch): Promise<NPIRegistryResponse> {
    const fetchURL = new URL("", this.npiRegistryBaseUrl);
    const searchParams = new URLSearchParams(fetchURL.searchParams);
    for (const [key, value] of Object.entries(search)) {
      searchParams.set(key, value);
    }
    fetchURL.search = searchParams.toString();
    return (await (await fetch(fetchURL.href)).json()) as NPIRegistryResponse;
  }

  private async ensureProvenance(): Promise<{
    provenance?: Partial<Provenance> | undefined;
    organization?: Organization | undefined;
  }> {
    if (this.provenance) {
      return this.provenance === "no-provenance"
        ? {}
        : { provenance: this.provenance, organization: this.cmsOrganization };
    }

    [this.cmsOrganization] = await createOr(
      "return",
      this.client,
      this.onResourceBuild(
        build("Organization", {
          identifier: [
            {
              ...KnownIdentifierSystems.URI,
              value: CMS_DOT_GOV_IDENTIFIER_VALUE,
            },
          ],
          name: "Centers for Medicare & Medicaid Services",
          alias: ["CMS"],
          type: [OrganizationType.values.Government.codeableConcept],
        })
      )
    );

    this.provenance = {
      agent: [
        {
          type: ProvenanceParticipantType.values.Author.codeableConcept,
          who: buildReferenceFromResource(this.cmsOrganization),
        },
      ],
    };

    return {
      organization: this.cmsOrganization,
      provenance: this.provenance,
    };
  }

  private async syncStatesAsLocation(
    results: NPIRegistryResult[]
  ): Promise<Location[]> {
    const allStates = _(results)
      .flatMap((x) => x.taxonomies)
      .map((x) => x.state)
      .uniq()
      .compact()
      .value();

    const result: Location[] = [];

    for (const state of allStates) {
      if (!this.stateLocationsMapping[state]) {
        [this.stateLocationsMapping[state]] = await createOr(
          "return",
          this.client,
          this.onResourceBuild(
            build("Location", {
              identifier: [
                {
                  system: "https://www.usps.com/",
                  value: state,
                },
              ],
              name: state,
            })
          )
        );
      }
      result.push(this.stateLocationsMapping[state]!);
    }

    return result;
  }

  private mapNPIRegistryAddressesToContactPoints(
    addresses: NPIRegistryAddress[] | null | undefined
  ): ContactPoint[] {
    return _(
      (addresses || []).map(
        (address) =>
          <ContactPoint[]>[
            address.telephone_number?.trim()
              ? {
                  id: `${this.stableId}-${address.telephone_number?.trim()}`,
                  system: ContactPointSystem.values.Phone.code,
                  use: ContactPointUse.values.Work.code,
                  value: address.telephone_number?.trim(),
                }
              : undefined,
            address.fax_number?.trim()
              ? {
                  id: `${this.stableId}-${address.fax_number?.trim()}`,
                  system: ContactPointSystem.values.Fax.code,
                  use: ContactPointUse.values.Work.code,
                  value: address.fax_number?.trim(),
                }
              : undefined,
          ]
      )
    )
      .flatten()
      .compact()
      .uniqBy("id")
      .value() as ContactPoint[];
  }

  private mapNPIRegistryAddressesToAddresses(
    addresses: NPIRegistryAddress[] | null | undefined
  ): Address[] {
    return (addresses || []).map((address) => ({
      id: `${this.stableId}-${address.address_purpose}-${address.postal_code}-${address.city}`,
      use: AddressUse.values.Work.code,
      type: this.mapNPIAddressPurposeToAddressType(address.address_purpose),
      line: [address.address_1, address.address_2 || ""].filter((x) =>
        x?.trim()
      ),
      city: address.city,
      state: address.state,
      postalCode: address.postal_code,
      country: address.country_code,
    }));
  }

  private mapNPIAddressPurposeToAddressType(addressPurpose: string) {
    switch (addressPurpose) {
      case "MAILING":
        return AddressType.values.Postal.code;
      case "LOCATION":
        return AddressType.values.Physical.code;
      default:
        return AddressType.values["Postal & Physical"].code;
    }
  }
}
