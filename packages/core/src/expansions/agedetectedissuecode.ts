/**
 * Proposed therapy may be inappropriate or contraindicated due to patient age
 * http://terminology.hl7.org/ValueSet/v3-AgeDetectedIssueCode
 */
export const AgeDetectedIssueCodeCode = {
  /**
   * Age Alert
   */
  AGE: "AGE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AgeDetectedIssueCodeCode =
  typeof AgeDetectedIssueCodeCode[keyof typeof AgeDetectedIssueCodeCode];
