/**
 * MedicationAdministration Status Codes
 * http://hl7.org/fhir/ValueSet/medication-admin-status
 */
export const MedicationAdministrationStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationAdministrationStatusCodesCode =
  typeof MedicationAdministrationStatusCodesCode[keyof typeof MedicationAdministrationStatusCodesCode];
