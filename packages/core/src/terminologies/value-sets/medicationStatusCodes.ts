/**
 * Medication Status Codes
 * http://hl7.org/fhir/ValueSet/medication-status
 */
export const MedicationStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationStatusCodesCode =
  typeof MedicationStatusCodesCode[keyof typeof MedicationStatusCodesCode];
