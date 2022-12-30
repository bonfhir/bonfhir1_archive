/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsAfterOrConcurrentWithEndOf
 */
export const ActRelationshipEndsAfterOrConcurrentWithEndOfCode = {
  /**
   * ends after or concurrent with end of
   */
  EAEORECW: "EAEORECW",

  /**
   * ends after end of
   */
  EAE: "EAE",

  /**
   * starts after start of, ends after end of
   */
  SASEAE: "SASEAE",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsAfterOrConcurrentWithEndOfCode =
  typeof ActRelationshipEndsAfterOrConcurrentWithEndOfCode[keyof typeof ActRelationshipEndsAfterOrConcurrentWithEndOfCode];
