/**
 * MedicationKnowledge Package Type Codes
 * http://hl7.org/fhir/ValueSet/medicationknowledge-package-type
 */
export const medicationKnowledgePackageTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type medicationKnowledgePackageTypeCodesCode =
  typeof medicationKnowledgePackageTypeCodesCode[keyof typeof medicationKnowledgePackageTypeCodesCode];
