/**
 * Uses of an address not included in Address.use.
 * http://hl7.org/fhir/ValueSet/postal-address-use
 */
export const PostalAddressUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PostalAddressUseCode =
  typeof PostalAddressUseCode[keyof typeof PostalAddressUseCode];
