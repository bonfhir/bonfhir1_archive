/**
 * MedicationKnowledge Status Codes
 * http://hl7.org/fhir/ValueSet/medicationknowledge-status
 */
export const MedicationKnowledgeStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationKnowledgeStatusCodesCode =
  typeof MedicationKnowledgeStatusCodesCode[keyof typeof MedicationKnowledgeStatusCodesCode];
