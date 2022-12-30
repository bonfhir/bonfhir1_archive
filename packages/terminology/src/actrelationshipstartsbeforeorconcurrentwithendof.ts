/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeOrConcurrentWithEndOf
 */
export const ActRelationshipStartsBeforeOrConcurrentWithEndOfCode = {
  /**
   * starts before or concurrent with end of
   */
  SBEORSCWE: "SBEORSCWE",

  /**
   * overlaps with
   */
  OVERLAP: "OVERLAP",

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
   * ends during
   */
  EDU: "EDU",

  /**
   * contains start of, ends before end of
   */
  SBSEASEBE: "SBSEASEBE",

  /**
   * starts with. ends before end of
   */
  SCWSEBE: "SCWSEBE",

  /**
   * contains end of
   */
  SBEEAE: "SBEEAE",

  /**
   * start after start of, contains end of
   */
  SASSBEEAS: "SASSBEEAS",

  /**
   * contains time of
   */
  SBSEAE: "SBSEAE",

  /**
   * starts with, ends after end of
   */
  SCWSEAE: "SCWSEAE",

  /**
   * contains start of
   */
  SBSEAS: "SBSEAS",

  /**
   * starts concurrent with
   */
  SCW: "SCW",

  /**
   * starts concurrent with end of
   */
  SCWE: "SCWE",

  /**
   * starts during
   */
  SDU: "SDU",

  /**
   * starts before end of
   */
  SBE: "SBE",

  /**
   * ends before end of
   */
  EBE: "EBE",

  /**
   * starts before start of, ends before end of
   */
  SBSEBE: "SBSEBE",

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
   * ends before or concurrent with end of
   */
  EBEORECW: "EBEORECW",

  /**
   * starts before or concurrent with start of
   */
  SBSORSCW: "SBSORSCW",

  /**
   * starts before start of
   */
  SBS: "SBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeOrConcurrentWithEndOfCode =
  typeof ActRelationshipStartsBeforeOrConcurrentWithEndOfCode[keyof typeof ActRelationshipStartsBeforeOrConcurrentWithEndOfCode];
