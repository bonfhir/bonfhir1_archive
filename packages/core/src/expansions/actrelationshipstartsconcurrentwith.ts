/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsConcurrentWith
 */
export const ActRelationshipStartsConcurrentWithCode = {
  /**
   * starts concurrent with
   */
  SCW: "SCW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsConcurrentWithCode =
  typeof ActRelationshipStartsConcurrentWithCode[keyof typeof ActRelationshipStartsConcurrentWithCode];
