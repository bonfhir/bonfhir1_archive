/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipConcurrentWith
 */
export const ActRelationshipConcurrentWithCode = {
  /**
   * concurrent with
   */
  CONCURRENT: "CONCURRENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipConcurrentWithCode =
  typeof ActRelationshipConcurrentWithCode[keyof typeof ActRelationshipConcurrentWithCode];
