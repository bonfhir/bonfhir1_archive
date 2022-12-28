/**
 * This value set includes sample Contract Term SubType codes.
 * http://hl7.org/fhir/ValueSet/contract-term-subtype
 */
export const ContractTermSubtypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractTermSubtypeCodesCode =
  typeof ContractTermSubtypeCodesCode[keyof typeof ContractTermSubtypeCodesCode];
