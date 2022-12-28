/**
 * MedicationRequest Intent Codes
 * http://hl7.org/fhir/ValueSet/medicationrequest-intent
 */
export const medicationRequestIntentCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type medicationRequestIntentCode =
  typeof medicationRequestIntentCode[keyof typeof medicationRequestIntentCode];
