/**
 * Proposed therapy may interact with an existing or recent therapeutic product
 * http://terminology.hl7.org/ValueSet/v3-TherapeuticProductDetectedIssueCode
 */
export const TherapeuticProductDetectedIssueCodeCode = {
  /**
   * Therapeutic Product Alert
   */
  TPROD: "TPROD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TherapeuticProductDetectedIssueCodeCode =
  typeof TherapeuticProductDetectedIssueCodeCode[keyof typeof TherapeuticProductDetectedIssueCodeCode];
