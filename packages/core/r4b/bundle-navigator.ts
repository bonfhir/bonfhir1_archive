import { Bundle, BundleEntry, FhirResource } from "fhir/r4";
import { evaluate as evaluateFhirPath } from "fhirpath";
import { buildReferenceFromResource } from "./builders";
import { asArray } from "./types";

/**
 * Allows easy navigation inside a mixed bundle, principally returned by search operations.
 * Builds lazy indexes that allows fast resolution of references, search mode and types to
 * efficiently navigate resources contained in the bundle.
 *
 * Will _not_ perform network calls to resolve references, only resolve resources that are in the bundle.
 *
 * @example
 *    // bundle from /Patient?_include=Patient:managingOrganization&_revinclude=Provenance:target&_include:iterate=Provenance:agent
 *    const navigator = bundleNavigator<Patient, Organization | Provenance>(bundle);
 *    for(const patient of navigator.searchMatch()) {
 *       const managingOrganization = navigator.reference(patient?.managingOrganization?.reference);
 *       const provenance = navigator.firstRevReference<Provenance>("ofType(Provenance).target.reference", relativeResourceReference(patient));
 *       const provenanceOrganization = navigator.reference(provenance?.agent[0]?.who.reference);
 *    }
 */
export function bundleNavigator<
  PrimaryResourceType extends FhirResource = FhirResource,
  SecondaryResourceType extends FhirResource = PrimaryResourceType
>(
  bundle:
    | Bundle<PrimaryResourceType | SecondaryResourceType>
    | Array<Bundle<PrimaryResourceType | SecondaryResourceType>>
): BundleNavigator<PrimaryResourceType, SecondaryResourceType> {
  return new BundleNavigator<PrimaryResourceType, SecondaryResourceType>(
    bundle
  );
}

export class BundleNavigator<
  PrimaryResourceType extends FhirResource = FhirResource,
  SecondaryResourceType extends FhirResource = PrimaryResourceType
> {
  private _bundles: Array<Bundle<PrimaryResourceType | SecondaryResourceType>>;

  // Index of resources by their reference - e.g. Patient/982effa0-aa0f-4995-b380-c1621b1f0ffc -> Patient
  // Built by _ensurePrimaryIndices.
  private _resourcesByRelativeReference:
    | Map<string, PrimaryResourceType | SecondaryResourceType>
    | undefined;

  // Index of resources by their entry search mode - e.g. entry.search.mode = "search" or "include" - e.g.
  // "search" -> [Patient]
  // Built by _ensurePrimaryIndices.
  private _resourcesBySearchMode:
    | Map<
        "match" | "include" | "outcome",
        Array<PrimaryResourceType | SecondaryResourceType>
      >
    | undefined;

  // Index of resources by their type - e.g. "Patient" or "Organization" - e.g.
  // "Organization" -> [Organization]
  // Built by _ensurePrimaryIndices.
  private _resourcesByType:
    | Map<
        (PrimaryResourceType | SecondaryResourceType)["resourceType"],
        Array<PrimaryResourceType | SecondaryResourceType>
      >
    | undefined;

  // Index resources first by a fhirPath indicating a reverse reference
  // (probably obtained through a _revinclude instruction), then by the actual reverse reference - e.g.
  // "ofType(Provenance).target.reference" -> Patient/982effa0-aa0f-4995-b380-c1621b1f0ffc -> [Provenance]
  // Built by _ensureFhirPathIndex
  private _resourcesByRefFhirPathIndex:
    | Map<
        string | Path,
        Map<string, Array<PrimaryResourceType | SecondaryResourceType>>
      >
    | undefined;

  /**
   * Initialize a new Bundle navigator, using existing bundles.
   * Indexing is lazy and performed on-demand, so initialization is cheap.
   */
  constructor(
    bundle:
      | Bundle<PrimaryResourceType | SecondaryResourceType>
      | Array<Bundle<PrimaryResourceType | SecondaryResourceType>>
  ) {
    this._bundles = asArray(bundle);
  }

  /**
   * Return a resource identifies by its unique reference, or undefined if not found.
   * If there are duplicates in the bundle, will return one of them.
   *
   * @param reference: the relative resource reference - e.g. Patient/982effa0-aa0f-4995-b380-c1621b1f0ffc
   */
  public reference<
    MatchType extends PrimaryResourceType | SecondaryResourceType =
      | PrimaryResourceType
      | SecondaryResourceType
  >(reference: string | null | undefined): MatchType | undefined {
    if (!reference?.length) {
      return undefined;
    }

    this._ensurePrimaryIndices();

    return (this._resourcesByRelativeReference?.get(reference) || undefined) as
      | MatchType
      | undefined;
  }

  /**
   * Return matching resources that have the reference returned by the specified FHIRPath
   * This can be used to find associated resource returned as part of a revinclude search parameter.
   * @param fhirPath - the FHIR path that points to the reference to look for inside the resource. - e.g. "ofType(Claim).patient.reference"
   * @param reference - the resource reference to match with the values returned by the fhirPath - e.g. "Patient/59ba0a80-035a-4a8e-930b-d9f6c523b97a"
   *
   * @example
   *   navigator.refReference<Appointment>("ofType(Appointment).participant.actor.reference", "Practitioner/06549508-aae9-4d82-a937-0ddeb0f2de38");
   *
   * @see http://hl7.org/fhir/fhirpath.html
   */
  public revReference<
    MatchType extends PrimaryResourceType | SecondaryResourceType =
      | PrimaryResourceType
      | SecondaryResourceType
  >(
    fhirPath: string | Path,
    reference: string | null | undefined
  ): MatchType[] {
    if (!reference?.length) {
      return [];
    }

    this._ensureFhirPathIndex(fhirPath);

    return (this._resourcesByRefFhirPathIndex?.get(fhirPath)?.get(reference) ||
      []) as MatchType[];
  }

  /**
   * Return the first matching resource that have the reference returned by the specified FHIRPath, or undefined if there isn't any.
   * This can be used to find associated resource returned as part of a revinclude search parameter.
   * @param fhirPath - the FHIR path that points to the reference to look for inside the resource. - e.g. "ofType(Claim).patient"
   * @param reference - the resource reference to match with the values returned by the fhirPath - e.g. "Patient/59ba0a80-035a-4a8e-930b-d9f6c523b97a"
   *
   * @example
   *   navigator.refReference<Appointment>("ofType(Provenance).target.actor.reference", "Patient/06549508-aae9-4d82-a937-0ddeb0f2de38");
   *
   * @see http://hl7.org/fhir/fhirpath.html
   */
  public firstRevReference<
    MatchType extends PrimaryResourceType | SecondaryResourceType =
      | PrimaryResourceType
      | SecondaryResourceType
  >(
    fhirPath: string | Path,
    reference: string | null | undefined
  ): MatchType | undefined {
    if (!reference?.length) {
      return undefined;
    }

    this._ensureFhirPathIndex(fhirPath);

    return (this._resourcesByRefFhirPathIndex?.get(fhirPath)?.get(reference) ||
      [])?.[0] as MatchType | undefined;
  }

  /**
   * Get all the resources that have a search mode of match (e.g. the primary resource or the bundle).
   * This is useful to iterate over the primary resource for a search.
   */
  public searchMatch<
    MatchType extends PrimaryResourceType = PrimaryResourceType
  >(): MatchType[] {
    this._ensurePrimaryIndices();

    return (this._resourcesBySearchMode?.get("match") ||
      []) as unknown as MatchType[];
  }

  /**
   * Get the first entry in the bundle that has a search mode of match, or undefined if there isn't any.
   */
  public firstSearchMatch<
    MatchType extends PrimaryResourceType = PrimaryResourceType
  >(): MatchType | undefined {
    this._ensurePrimaryIndices();

    return this._resourcesBySearchMode?.get("match")?.[0] as unknown as
      | MatchType
      | undefined;
  }

  /**
   * Get all the resources of a specific type.
   */
  public type<
    MatchResourceType extends (
      | PrimaryResourceType
      | SecondaryResourceType
    )["resourceType"] = (
      | PrimaryResourceType
      | SecondaryResourceType
    )["resourceType"]
  >(
    type: MatchResourceType
  ): Extract<
    PrimaryResourceType | SecondaryResourceType,
    { resourceType: MatchResourceType }
  >[] {
    this._ensurePrimaryIndices();

    return (this._resourcesByType?.get(type) || []) as Extract<
      PrimaryResourceType | SecondaryResourceType,
      { resourceType: MatchResourceType }
    >[];
  }

  /**
   * Return all unique resources across bundles.
   **/
  public get resources(): IterableIterator<
    PrimaryResourceType | SecondaryResourceType
  > {
    this._ensurePrimaryIndices();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._resourcesByRelativeReference!.values();
  }

  private _ensurePrimaryIndices() {
    if (!this._resourcesByRelativeReference) {
      this._resourcesByRelativeReference = new Map();
      this._resourcesBySearchMode = new Map();
      this._resourcesByType = new Map();

      for (const entry of this._bundles
        .flatMap(
          (x) =>
            x.entry as BundleEntry<PrimaryResourceType | SecondaryResourceType>
        )
        .filter((x) => !!x) || []) {
        if (entry.resource) {
          if (entry.resource?.id?.length) {
            this._resourcesByRelativeReference.set(
              buildReferenceFromResource(entry.resource).reference,
              entry.resource
            );
          }

          if (entry.search?.mode?.length) {
            if (!this._resourcesBySearchMode.has(entry.search.mode)) {
              this._resourcesBySearchMode.set(entry.search.mode, []);
            }

            this._resourcesBySearchMode
              .get(entry.search.mode)
              ?.push(entry.resource);
          }

          if (entry.resource.resourceType?.length) {
            if (!this._resourcesByType.has(entry.resource.resourceType)) {
              this._resourcesByType.set(entry.resource.resourceType, []);
            }

            this._resourcesByType
              .get(entry.resource.resourceType)
              ?.push(entry.resource);
          }
        }
      }
    }
  }

  private _ensureFhirPathIndex(fhirPath: string | Path): void {
    if (!this._resourcesByRefFhirPathIndex) {
      this._resourcesByRefFhirPathIndex = new Map();
    }

    if (!this._resourcesByRefFhirPathIndex.has(fhirPath)) {
      const mappedByFhirPath = new Map();
      for (const entry of this._bundles
        .flatMap(
          (x) =>
            x.entry as BundleEntry<PrimaryResourceType | SecondaryResourceType>
        )
        .filter((x) => !!x) || []) {
        for (const reference of evaluateFhirPath(entry.resource, fhirPath)) {
          if (!mappedByFhirPath.has(reference)) {
            mappedByFhirPath.set(reference, []);
          }

          mappedByFhirPath.get(reference).push(entry.resource);
        }
      }
      this._resourcesByRefFhirPathIndex.set(fhirPath, mappedByFhirPath);
    }
  }
}
