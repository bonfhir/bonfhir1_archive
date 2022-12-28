/**
 * The use of an address.
 * http://hl7.org/fhir/ValueSet/address-use
 */
export const AddressUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AddressUseCode = typeof AddressUseCode[keyof typeof AddressUseCode];
