/**
 * MedicationRequest Status Reason Codes
 * http://hl7.org/fhir/ValueSet/medicationrequest-status-reason
 */
export const medicationRequestStatusReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type medicationRequestStatusReasonCodesCode =
  typeof medicationRequestStatusReasonCodesCode[keyof typeof medicationRequestStatusReasonCodesCode];
