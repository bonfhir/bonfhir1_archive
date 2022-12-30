/**
 * The source Act starts after the end of the target Act (i.e. if we say "ActOne SBE ActTwo", it means that ActOne starts before the end of ActTwo, therefore ActOne is the source and ActTwo is the target).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeEnd
 */
export const ActRelationshipStartsBeforeEndCode = {
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
   * starts with. ends before end of
   */
  SCWSEBE: "SCWSEBE",

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
   * starts before or concurrent with start of
   */
  SBSORSCW: "SBSORSCW",

  /**
   * starts concurrent with
   */
  SCW: "SCW",

  /**
   * starts with, ends after end of
   */
  SCWSEAE: "SCWSEAE",

  /**
   * starts before start of
   */
  SBS: "SBS",

  /**
   * contains start of
   */
  SBSEAS: "SBSEAS",

  /**
   * contains time of
   */
  SBSEAE: "SBSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsBeforeEndCode =
  typeof ActRelationshipStartsBeforeEndCode[keyof typeof ActRelationshipStartsBeforeEndCode];
