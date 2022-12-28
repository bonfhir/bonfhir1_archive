/**
 * The type of an address (physical / postal).
 * http://hl7.org/fhir/ValueSet/address-type
 */
export const AddressTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AddressTypeCode =
  typeof AddressTypeCode[keyof typeof AddressTypeCode];
