/**
 * MedicationRequest Category Codes
 * http://hl7.org/fhir/ValueSet/medicationrequest-category
 */
export const medicationRequestCategoryCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type medicationRequestCategoryCodesCode =
  typeof medicationRequestCategoryCodesCode[keyof typeof medicationRequestCategoryCodesCode];
