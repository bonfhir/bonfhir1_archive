/**
 * This value set includes sample Contract Subtype codes.
 * http://hl7.org/fhir/ValueSet/contract-subtype
 */
export const ContractSubtypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractSubtypeCodesCode =
  typeof ContractSubtypeCodesCode[keyof typeof ContractSubtypeCodesCode];
