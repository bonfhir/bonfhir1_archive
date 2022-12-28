/**
 * There may be an issue with the patient complying with the intentions of the proposed therapy
 * http://terminology.hl7.org/ValueSet/v3-ComplianceDetectedIssueCode
 */
export const ComplianceDetectedIssueCodeCode = {
  /**
   * Compliance Alert
   */
  COMPLY: "COMPLY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ComplianceDetectedIssueCodeCode =
  typeof ComplianceDetectedIssueCodeCode[keyof typeof ComplianceDetectedIssueCodeCode];
