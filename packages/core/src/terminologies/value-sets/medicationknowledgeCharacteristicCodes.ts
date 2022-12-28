/**
 * MedicationKnowledge Characteristic Codes
 * http://hl7.org/fhir/ValueSet/medicationknowledge-characteristic
 */
export const medicationKnowledgeCharacteristicCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type medicationKnowledgeCharacteristicCodesCode =
  typeof medicationKnowledgeCharacteristicCodesCode[keyof typeof medicationKnowledgeCharacteristicCodesCode];
