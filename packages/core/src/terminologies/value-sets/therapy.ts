/**
 * A therapy.
 * http://hl7.org/fhir/ValueSet/therapy
 */
export const TherapyCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TherapyCode = typeof TherapyCode[keyof typeof TherapyCode];
