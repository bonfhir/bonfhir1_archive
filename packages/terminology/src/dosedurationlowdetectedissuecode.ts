/**
 * Proposed length of therapy is shorter than that necessary for therapeutic effect
 * http://terminology.hl7.org/ValueSet/v3-DoseDurationLowDetectedIssueCode
 */
export const DoseDurationLowDetectedIssueCodeCode = {
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
export type DoseDurationLowDetectedIssueCodeCode =
  typeof DoseDurationLowDetectedIssueCodeCode[keyof typeof DoseDurationLowDetectedIssueCodeCode];
