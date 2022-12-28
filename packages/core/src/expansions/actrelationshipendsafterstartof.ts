/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsAfterStartOf
 */
export const ActRelationshipEndsAfterStartOfCode = {
  /**
   * ends after start of
   */
  EAS: "EAS",

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
   * starts after start of
   */
  SAS: "SAS",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsAfterStartOfCode =
  typeof ActRelationshipEndsAfterStartOfCode[keyof typeof ActRelationshipEndsAfterStartOfCode];
