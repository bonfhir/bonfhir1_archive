/**
 * This value set includes sample Contract Signer Type codes.
 * http://hl7.org/fhir/ValueSet/contract-signer-type
 */
export const ContractSignerTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractSignerTypeCodesCode =
  typeof ContractSignerTypeCodesCode[keyof typeof ContractSignerTypeCodesCode];
