/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsBeforeOrConcurrentWithEndOf
 */
export const ActRelationshipEndsBeforeOrConcurrentWithEndOfCode = {
  /**
   * ends before or concurrent with end of
   */
  EBEORECW: "EBEORECW",

  /**
   * ends concurrent with
   */
  ECW: "ECW",

  /**
   * concurrent with
   */
  CONCURRENT: "CONCURRENT",

  /**
   * starts before start of, ends with
   */
  SBSECWE: "SBSECWE",

  /**
   * ends before end of
   */
  EBE: "EBE",

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
export type ActRelationshipEndsBeforeOrConcurrentWithEndOfCode =
  typeof ActRelationshipEndsBeforeOrConcurrentWithEndOfCode[keyof typeof ActRelationshipEndsBeforeOrConcurrentWithEndOfCode];
