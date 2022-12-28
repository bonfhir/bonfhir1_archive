/**
 * This value set contract specific codes for status.
 * http://hl7.org/fhir/ValueSet/contract-definition-type
 */
export const ContractResourceDefinitionTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceDefinitionTypeCodesCode =
  typeof ContractResourceDefinitionTypeCodesCode[keyof typeof ContractResourceDefinitionTypeCodesCode];
