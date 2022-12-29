/**
 * Proposed length of therapy is longer than standard practice
 * http://terminology.hl7.org/ValueSet/v3-DoseDurationHighDetectedIssueCode
 */
export const DoseDurationHighDetectedIssueCodeCode = {
  /**
   * Dose-Duration High Alert
   */
  DoseDurationHighAlert: "DOSEDURH",

  /**
   * Dose-Duration High for Indication Alert
   */
  DoseDurationHighforIndicationAlert: "DOSEDURHIND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseDurationHighDetectedIssueCodeCode =
  typeof DoseDurationHighDetectedIssueCodeCode[keyof typeof DoseDurationHighDetectedIssueCodeCode];
