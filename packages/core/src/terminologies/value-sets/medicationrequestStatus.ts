/**
 * MedicationRequest Status Codes
 * http://hl7.org/fhir/ValueSet/medicationrequest-status
 */
export const medicationrequestStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type medicationrequestStatusCode =
  typeof medicationrequestStatusCode[keyof typeof medicationrequestStatusCode];
