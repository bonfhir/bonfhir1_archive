/**
 * This value set includes sample Contract Action codes.
 * http://hl7.org/fhir/ValueSet/contract-action
 */
export const ContractActionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractActionCodesCode =
  typeof ContractActionCodesCode[keyof typeof ContractActionCodesCode];
