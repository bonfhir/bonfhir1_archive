/**
 * A set of codes for each different representation of a name.
 * http://hl7.org/fhir/ValueSet/name-v3-representation
 */
export const NameRepresentationUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NameRepresentationUseCode =
  typeof NameRepresentationUseCode[keyof typeof NameRepresentationUseCode];
