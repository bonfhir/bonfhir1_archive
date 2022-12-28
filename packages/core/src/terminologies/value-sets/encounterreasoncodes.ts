/**
 * This examples value set defines the set of codes that can be used to indicate reasons for an encounter.
 * http://hl7.org/fhir/ValueSet/encounter-reason
 */
export const EncounterReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterReasonCodesCode =
  typeof EncounterReasonCodesCode[keyof typeof EncounterReasonCodesCode];
