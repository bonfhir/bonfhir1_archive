/**
 * The use of a human name.
 * http://hl7.org/fhir/ValueSet/name-use
 */
export const NameUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NameUseCode = typeof NameUseCode[keyof typeof NameUseCode];
