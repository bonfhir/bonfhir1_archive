/**
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 * http://hl7.org/fhir/ValueSet/encounter-special-courtesy
 */
export const SpecialCourtesyCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecialCourtesyCode =
  typeof SpecialCourtesyCode[keyof typeof SpecialCourtesyCode];
