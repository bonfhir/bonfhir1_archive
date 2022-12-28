/**
 * Proposed therapy may be inappropriate or contraindicated based on the potential for a patient reaction to the proposed product
 * http://terminology.hl7.org/ValueSet/v3-ReactionDetectedIssueCode
 */
export const ReactionDetectedIssueCodeCode = {
  /**
   * Reaction Alert
   */
  REACT: "REACT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReactionDetectedIssueCodeCode =
  typeof ReactionDetectedIssueCodeCode[keyof typeof ReactionDetectedIssueCodeCode];
