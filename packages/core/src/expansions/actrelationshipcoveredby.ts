/**
 * A relationship in which the source act is covered by or is under the authority of a target act. A financial instrument such as an Invoice Element is covered by one or more specific instances of an Insurance Policy.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCoveredBy
 */
export const ActRelationshipCoveredByCode = {
  /**
   * covered by
   */
  COVBY: "COVBY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCoveredByCode =
  typeof ActRelationshipCoveredByCode[keyof typeof ActRelationshipCoveredByCode];
