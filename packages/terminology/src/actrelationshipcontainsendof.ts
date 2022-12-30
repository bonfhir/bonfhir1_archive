/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipContainsEndOf
 */
export const ActRelationshipContainsEndOfCode = {
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
export type ActRelationshipContainsEndOfCode =
  typeof ActRelationshipContainsEndOfCode[keyof typeof ActRelationshipContainsEndOfCode];
