/**
 * Proposed dosage is below suggested therapeutic levels
 * http://terminology.hl7.org/ValueSet/v3-DoseLowDetectedIssueCode
 */
export const DoseLowDetectedIssueCodeCode = {
  /**
   * Low Dose Alert
   */
  DOSEL: "DOSEL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoseLowDetectedIssueCodeCode =
  typeof DoseLowDetectedIssueCodeCode[keyof typeof DoseLowDetectedIssueCodeCode];
