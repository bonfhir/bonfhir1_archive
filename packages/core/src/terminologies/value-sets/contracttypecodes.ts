/**
 * This value set includes sample Contract Type codes.
 * http://hl7.org/fhir/ValueSet/contract-type
 */
export const ContractTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractTypeCodesCode =
  typeof ContractTypeCodesCode[keyof typeof ContractTypeCodesCode];
