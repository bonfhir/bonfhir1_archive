/**
 * Proposed therapy may interact with an existing or recent therapeutic product
 * http://terminology.hl7.org/ValueSet/v3-TherapeuticProductDetectedIssueCode
 */
export const TherapeuticProductDetectedIssueCodeCode = {
  /**
   * Therapeutic Product Alert
   */
  TPROD: "TPROD",

  /**
   * Drug Interaction Alert
   */
  DRG: "DRG",

  /**
   * Natural Health Product Alert
   */
  NHP: "NHP",

  /**
   * Non-Prescription Interaction Alert
   */
  NONRX: "NONRX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TherapeuticProductDetectedIssueCodeCode =
  typeof TherapeuticProductDetectedIssueCodeCode[keyof typeof TherapeuticProductDetectedIssueCodeCode];
