/**
 * This value set contract specific codes for action status.
 * http://hl7.org/fhir/ValueSet/contract-actionstatus
 */
export const ContractResourceActionStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractResourceActionStatusCodesCode =
  typeof ContractResourceActionStatusCodesCode[keyof typeof ContractResourceActionStatusCodesCode];
