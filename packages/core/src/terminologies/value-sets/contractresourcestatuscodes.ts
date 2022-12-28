/**
 * This value set contract specific codes for status.
 * http://hl7.org/fhir/ValueSet/contract-status
 */
export const ContractResourceStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceStatusCodesCode =
  typeof ContractResourceStatusCodesCode[keyof typeof ContractResourceStatusCodesCode];
