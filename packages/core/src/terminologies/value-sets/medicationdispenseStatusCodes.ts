/**
 * MedicationDispense Status Codes
 * http://hl7.org/fhir/ValueSet/medicationdispense-status
 */
export const MedicationDispenseStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationDispenseStatusCodesCode =
  typeof MedicationDispenseStatusCodesCode[keyof typeof MedicationDispenseStatusCodesCode];
