/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipContainsStartOf
 */
export const ActRelationshipContainsStartOfCode = {
  /**
   * contains start of
   */
  SBSEAS: "SBSEAS",

  /**
   * starts before start of, ends with
   */
  SBSECWE: "SBSECWE",

  /**
   * contains start of, ends before end of
   */
  SBSEASEBE: "SBSEASEBE",

  /**
   * contains time of
   */
  SBSEAE: "SBSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipContainsStartOfCode =
  typeof ActRelationshipContainsStartOfCode[keyof typeof ActRelationshipContainsStartOfCode];
