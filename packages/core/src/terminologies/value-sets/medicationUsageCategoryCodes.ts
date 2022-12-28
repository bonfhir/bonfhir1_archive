/**
 * Medication Status Codes
 * http://hl7.org/fhir/ValueSet/medication-statement-category
 */
export const MedicationusagecategorycodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationusagecategorycodesCode =
  typeof MedicationusagecategorycodesCode[keyof typeof MedicationusagecategorycodesCode];
