/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeOrConcurrentWithStartOf
 */
export const ActRelationshipStartsBeforeOrConcurrentWithStartOfCode = {
  /**
   * starts before or concurrent with start of
   */
  SBSORSCW: "SBSORSCW",

  /**
   * starts concurrent with
   */
  SCW: "SCW",

  /**
   * concurrent with
   */
  CONCURRENT: "CONCURRENT",

  /**
   * starts with. ends before end of
   */
  SCWSEBE: "SCWSEBE",

  /**
   * starts with, ends after end of
   */
  SCWSEAE: "SCWSEAE",

  /**
   * starts before start of
   */
  SBS: "SBS",

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

  /**
   * contains start of
   */
  SBSEAS: "SBSEAS",

  /**
   * starts before start of, ends with
   */
  SBSECWE: "SBSECWE",

  /**
   * contains time of
   */
  SBSEAE: "SBSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeOrConcurrentWithStartOfCode =
  typeof ActRelationshipStartsBeforeOrConcurrentWithStartOfCode[keyof typeof ActRelationshipStartsBeforeOrConcurrentWithStartOfCode];
