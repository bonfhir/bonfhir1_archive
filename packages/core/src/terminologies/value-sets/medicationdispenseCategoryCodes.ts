/**
 * MedicationDispense Category Codes
 * http://hl7.org/fhir/ValueSet/medicationdispense-category
 */
export const MedicationDispenseCategoryCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationDispenseCategoryCodesCode =
  typeof MedicationDispenseCategoryCodesCode[keyof typeof MedicationDispenseCategoryCodesCode];
