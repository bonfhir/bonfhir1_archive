/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsAfterStartOfEndsWith
 */
export const ActRelationshipStartsAfterStartOfEndsWithCode = {
  /**
   * starts after start of, ends with
   */
  SASECWE: "SASECWE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsAfterStartOfEndsWithCode =
  typeof ActRelationshipStartsAfterStartOfEndsWithCode[keyof typeof ActRelationshipStartsAfterStartOfEndsWithCode];
