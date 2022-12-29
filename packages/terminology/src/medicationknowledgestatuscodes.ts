/**
 * MedicationKnowledge Status Codes
 * http://terminology.hl7.org/ValueSet/medicationknowledge-status
 */
export const MedicationKnowledgeStatusCodesCode = {
  /**
   * Active
   */
  Active: "active",

  /**
   * Inactive
   */
  Inactive: "inactive",

  /**
   * Entered in Error
   */
  EnteredinError: "entered-in-error",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationKnowledgeStatusCodesCode =
  typeof MedicationKnowledgeStatusCodesCode[keyof typeof MedicationKnowledgeStatusCodesCode];
