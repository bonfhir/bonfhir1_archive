/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsAfterEndOf
 */
export const ActRelationshipEndsAfterEndOfCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsAfterEndOfCode =
  typeof ActRelationshipEndsAfterEndOfCode[keyof typeof ActRelationshipEndsAfterEndOfCode];
