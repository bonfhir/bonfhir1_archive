/**
 * The source Act starts after the start of the target Act (i.e. if we say "ActOne SAS ActTwo", it means that ActOne starts after the start of ActTwo, therefore ActOne is the source and ActTwo is the target).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipStartsAfterStartOf
 */
export const ActRelationshipStartsAfterStartOfCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipStartsAfterStartOfCode =
  typeof ActRelationshipStartsAfterStartOfCode[keyof typeof ActRelationshipStartsAfterStartOfCode];
