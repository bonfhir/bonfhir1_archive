/**
 * Proposed length of therpay differs from standard practice
 * http://terminology.hl7.org/ValueSet/v3-DoseDurationDetectedIssueCode
 */
export const DoseDurationDetectedIssueCodeCode = {
  /**
   * Dose-Duration Alert
   */
  DoseDurationAlert: "DOSEDUR",

  /**
   * Dose-Duration High Alert
   */
  DoseDurationHighAlert: "DOSEDURH",

  /**
   * Dose-Duration High for Indication Alert
   */
  DoseDurationHighforIndicationAlert: "DOSEDURHIND",

  /**
   * Dose-Duration Low Alert
   */
  DoseDurationLowAlert: "DOSEDURL",

  /**
   * Dose-Duration Low for Indication Alert
   */
  DoseDurationLowforIndicationAlert: "DOSEDURLIND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseDurationDetectedIssueCodeCode =
  typeof DoseDurationDetectedIssueCodeCode[keyof typeof DoseDurationDetectedIssueCodeCode];
