/**
 * This value set contract specific codes for status.
 * http://hl7.org/fhir/ValueSet/contract-expiration-type
 */
export const ContractResourceExpirationTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceExpirationTypeCodesCode =
  typeof ContractResourceExpirationTypeCodesCode[keyof typeof ContractResourceExpirationTypeCodesCode];
