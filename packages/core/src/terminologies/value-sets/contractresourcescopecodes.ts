/**
 * This value set contract specific codes for security classification.
 * http://hl7.org/fhir/ValueSet/contract-security-classification
 */
export const ContractResourceScopeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceScopeCodesCode =
  typeof ContractResourceScopeCodesCode[keyof typeof ContractResourceScopeCodesCode];
