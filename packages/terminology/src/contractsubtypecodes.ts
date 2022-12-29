/**
 * This value set includes sample Contract Subtype codes.
 * http://terminology.hl7.org/ValueSet/contract-subtype
 */
export const ContractSubtypeCodesCode = {
  /**
   * Disclosure-CA
   */
  DisclosureCA: "disclosure-ca",

  /**
   * Disclosure-US
   */
  DisclosureUS: "disclosure-us",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractSubtypeCodesCode =
  typeof ContractSubtypeCodesCode[keyof typeof ContractSubtypeCodesCode];
