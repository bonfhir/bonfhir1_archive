/**
 * Proposed dosage exceeds standard practice
 * http://terminology.hl7.org/ValueSet/v3-DoseHighDetectedIssueCode
 */
export const DoseHighDetectedIssueCodeCode = {
  /**
   * High Dose Alert
   */
  DOSEH: "DOSEH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseHighDetectedIssueCodeCode =
  typeof DoseHighDetectedIssueCodeCode[keyof typeof DoseHighDetectedIssueCodeCode];
