/**
 * Proposed dosage instructions for therapy differ from standard practice.
 * http://terminology.hl7.org/ValueSet/v3-DosageProblemDetectedIssueCode
 */
export const DosageProblemDetectedIssueCodeCode = {
  /**
   * Dosage problem
   */
  DOSE: "DOSE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DosageProblemDetectedIssueCodeCode =
  typeof DosageProblemDetectedIssueCodeCode[keyof typeof DosageProblemDetectedIssueCodeCode];
