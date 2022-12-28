/**
 * MedicationAdministration Category Codes
 * http://hl7.org/fhir/ValueSet/medication-admin-category
 */
export const MedicationAdministrationCategoryCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationAdministrationCategoryCodesCode =
  typeof MedicationAdministrationCategoryCodesCode[keyof typeof MedicationAdministrationCategoryCodesCode];
