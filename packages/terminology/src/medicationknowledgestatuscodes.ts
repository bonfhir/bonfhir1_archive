/**
 * MedicationKnowledge Status Codes
 * http://terminology.hl7.org/ValueSet/medicationknowledge-status
 */
export const MedicationKnowledgeStatusCodesCode = {
  /**
   * Active
   */
  active: "active",

  /**
   * Inactive
   */
  inactive: "inactive",

  /**
   * Entered in Error
   */
  "entered-in-error": "entered-in-error",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationKnowledgeStatusCodesCode =
  typeof MedicationKnowledgeStatusCodesCode[keyof typeof MedicationKnowledgeStatusCodesCode];
