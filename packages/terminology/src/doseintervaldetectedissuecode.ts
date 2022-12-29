/**
 * Proposed dosage interval/timing differs from standard practice
 * http://terminology.hl7.org/ValueSet/v3-DoseIntervalDetectedIssueCode
 */
export const DoseIntervalDetectedIssueCodeCode = {
  /**
   * Dose-Interval Alert
   */
  DoseIntervalAlert: "DOSEIVL",

  /**
   * Dose-Interval for Indication Alert
   */
  DoseIntervalforIndicationAlert: "DOSEIVLIND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseIntervalDetectedIssueCodeCode =
  typeof DoseIntervalDetectedIssueCodeCode[keyof typeof DoseIntervalDetectedIssueCodeCode];
