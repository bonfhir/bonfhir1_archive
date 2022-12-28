/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeStartOfEndsBeforeEndOf
 */
export const ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode = {
  /**
   * starts before start of, ends before end of
   */
  SBSEBE: "SBSEBE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode =
  typeof ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode[keyof typeof ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode];
