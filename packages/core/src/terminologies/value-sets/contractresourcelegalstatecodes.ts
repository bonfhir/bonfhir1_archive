/**
 * This value set contract specific codes for status.
 * http://hl7.org/fhir/ValueSet/contract-legalstate
 */
export const ContractResourceLegalStateCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceLegalStateCodesCode =
  typeof ContractResourceLegalStateCodesCode[keyof typeof ContractResourceLegalStateCodesCode];
