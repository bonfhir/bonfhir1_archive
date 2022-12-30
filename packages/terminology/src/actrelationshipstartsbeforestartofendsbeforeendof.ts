/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeStartOfEndsBeforeEndOf
 */
export const ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode = {
  /**
   * starts before start of, ends before end of
   */
  SBSEBE: "SBSEBE",

  /**
   * contains start of, ends before end of
   */
  SBSEASEBE: "SBSEASEBE",

  /**
   * ends before or concurrent with start of
   */
  EBSORECWS: "EBSORECWS",

  /**
   * ends concurrent with start of
   */
  ECWS: "ECWS",

  /**
   * ends before start of
   */
  EBS: "EBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode =
  typeof ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode[keyof typeof ActRelationshipStartsBeforeStartOfEndsBeforeEndOfCode];
