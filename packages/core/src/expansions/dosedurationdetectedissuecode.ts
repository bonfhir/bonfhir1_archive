/**
 * Proposed length of therpay differs from standard practice
 * http://terminology.hl7.org/ValueSet/v3-DoseDurationDetectedIssueCode
 */
export const DoseDurationDetectedIssueCodeCode = {
  /**
   * Dose-Duration Alert
   */
  DOSEDUR: "DOSEDUR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseDurationDetectedIssueCodeCode =
  typeof DoseDurationDetectedIssueCodeCode[keyof typeof DoseDurationDetectedIssueCodeCode];
