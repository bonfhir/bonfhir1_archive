/**
 * This value set includes sample Contract Term Type codes.
 * http://terminology.hl7.org/ValueSet/contract-term-type
 */
export const ContractTermTypeCodesCode = {
  /**
   * Statutory
   */
  statutory: "statutory",

  /**
   * Subject To
   */
  "subject-to": "subject-to",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractTermTypeCodesCode =
  typeof ContractTermTypeCodesCode[keyof typeof ContractTermTypeCodesCode];
