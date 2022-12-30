/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsBeforeOrConcurrentWithStartOf
 */
export const ActRelationshipEndsBeforeOrConcurrentWithStartOfCode = {
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
export type ActRelationshipEndsBeforeOrConcurrentWithStartOfCode =
  typeof ActRelationshipEndsBeforeOrConcurrentWithStartOfCode[keyof typeof ActRelationshipEndsBeforeOrConcurrentWithStartOfCode];
