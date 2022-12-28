/**
 * This value set contract specific codes for status.
 * http://hl7.org/fhir/ValueSet/contract-definition-subtype
 */
export const ContractResourceDefinitionSubtypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceDefinitionSubtypeCodesCode =
  typeof ContractResourceDefinitionSubtypeCodesCode[keyof typeof ContractResourceDefinitionSubtypeCodesCode];
