/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsBeforeStartOf
 */
export const ActRelationshipStartsBeforeStartOfCode = {
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
export type ActRelationshipStartsBeforeStartOfCode =
  typeof ActRelationshipStartsBeforeStartOfCode[keyof typeof ActRelationshipStartsBeforeStartOfCode];
