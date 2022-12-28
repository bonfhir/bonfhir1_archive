/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipOverlapsWith
 */
export const ActRelationshipOverlapsWithCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipOverlapsWithCode =
  typeof ActRelationshipOverlapsWithCode[keyof typeof ActRelationshipOverlapsWithCode];
