/**
 * Pro-forma value set for each head code in the ActRelationshipType code system; all codes present and future below the head code.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsAfterOrConcurrentWithStartOf
 */
export const ActRelationshipStartsAfterOrConcurrentWithStartOfCode = {
  /**
   * starts after or concurrent with start of
   */
  SASORSCW: "SASORSCW",

  /**
   * starts after start of
   */
  SAS: "SAS",

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
   * starts after end of
   */
  SAE: "SAE",

  /**
   * occurs during
   */
  DURING: "DURING",

  /**
   * starts after start of, ends with
   */
  SASECWE: "SASECWE",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsAfterOrConcurrentWithStartOfCode =
  typeof ActRelationshipStartsAfterOrConcurrentWithStartOfCode[keyof typeof ActRelationshipStartsAfterOrConcurrentWithStartOfCode];
