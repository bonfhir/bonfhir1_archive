/**
 * Proposed therapy may be inappropriate or contraindicated based on the potential for a patient reaction to the proposed product
 * http://terminology.hl7.org/ValueSet/v3-ReactionDetectedIssueCode
 */
export const ReactionDetectedIssueCodeCode = {
  /**
   * Reaction Alert
   */
  REACT: "REACT",

  /**
   * Allergy Alert
   */
  ALGY: "ALGY",

  /**
   * Intolerance Alert
   */
  INT: "INT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReactionDetectedIssueCodeCode =
  typeof ReactionDetectedIssueCodeCode[keyof typeof ReactionDetectedIssueCodeCode];
