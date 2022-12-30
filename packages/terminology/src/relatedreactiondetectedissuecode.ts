/**
 * Proposed therapy may be inappropriate or contraindicated because of a potential patient reaction to a cross-sensitivity related product.
 * http://terminology.hl7.org/ValueSet/v3-RelatedReactionDetectedIssueCode
 */
export const RelatedReactionDetectedIssueCodeCode = {
  /**
   * Related Reaction Alert
   */
  RREACT: "RREACT",

  /**
   * Related Allergy Alert
   */
  RALG: "RALG",

  /**
   * Related Prior Reaction Alert
   */
  RAR: "RAR",

  /**
   * Related Intolerance Alert
   */
  RINT: "RINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RelatedReactionDetectedIssueCodeCode =
  typeof RelatedReactionDetectedIssueCodeCode[keyof typeof RelatedReactionDetectedIssueCodeCode];
