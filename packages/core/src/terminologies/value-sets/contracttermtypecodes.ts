/**
 * This value set includes sample Contract Term Type codes.
 * http://hl7.org/fhir/ValueSet/contract-term-type
 */
export const ContractTermTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractTermTypeCodesCode =
  typeof ContractTermTypeCodesCode[keyof typeof ContractTermTypeCodesCode];
