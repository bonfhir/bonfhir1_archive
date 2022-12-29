/**
 * Proposed therapy may interact with an existing or recent therapeutic product
 * http://terminology.hl7.org/ValueSet/v3-TherapeuticProductDetectedIssueCode
 */
export const TherapeuticProductDetectedIssueCodeCode = {
  /**
   * Therapeutic Product Alert
   */
  TherapeuticProductAlert: "TPROD",

  /**
   * Drug Interaction Alert
   */
  DrugInteractionAlert: "DRG",

  /**
   * Natural Health Product Alert
   */
  NaturalHealthProductAlert: "NHP",

  /**
   * Non-Prescription Interaction Alert
   */
  NonPrescriptionInteractionAlert: "NONRX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TherapeuticProductDetectedIssueCodeCode =
  typeof TherapeuticProductDetectedIssueCodeCode[keyof typeof TherapeuticProductDetectedIssueCodeCode];
