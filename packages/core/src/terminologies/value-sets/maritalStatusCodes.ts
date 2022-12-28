/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 * http://hl7.org/fhir/ValueSet/marital-status
 */
export const MaritalStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MaritalStatusCodesCode =
  typeof MaritalStatusCodesCode[keyof typeof MaritalStatusCodesCode];
