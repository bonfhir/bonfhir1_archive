/**
 * This value set includes sample Contract Type codes.
 * http://terminology.hl7.org/ValueSet/contract-type
 */
export const ContractTypeCodesCode = {
  /**
   * Privacy
   */
  privacy: "privacy",

  /**
   * Disclosure
   */
  disclosure: "disclosure",

  /**
   * Health Insurance
   */
  healthinsurance: "healthinsurance",

  /**
   * Supply Contract
   */
  supply: "supply",

  /**
   * Consent
   */
  consent: "consent",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractTypeCodesCode =
  typeof ContractTypeCodesCode[keyof typeof ContractTypeCodesCode];
