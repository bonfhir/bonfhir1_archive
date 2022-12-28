/**
 * A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 * http://hl7.org/fhir/ValueSet/identifier-type
 */
export const IdentifierTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IdentifierTypeCodesCode =
  typeof IdentifierTypeCodesCode[keyof typeof IdentifierTypeCodesCode];
