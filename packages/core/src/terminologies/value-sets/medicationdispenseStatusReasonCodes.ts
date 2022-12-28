/**
 * MedicationDispense Status Codes
 * http://hl7.org/fhir/ValueSet/medicationdispense-status-reason
 */
export const MedicationDispenseStatusReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationDispenseStatusReasonCodesCode =
  typeof MedicationDispenseStatusReasonCodesCode[keyof typeof MedicationDispenseStatusReasonCodesCode];
