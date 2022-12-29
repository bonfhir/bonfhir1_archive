/**
 * This value set includes sample Contract Type codes.
 * http://terminology.hl7.org/ValueSet/contract-type
 */
export const ContractTypeCodesCode = {
  /**
   * Privacy
   */
  Privacy: "privacy",

  /**
   * Disclosure
   */
  Disclosure: "disclosure",

  /**
   * Health Insurance
   */
  HealthInsurance: "healthinsurance",

  /**
   * Supply Contract
   */
  SupplyContract: "supply",

  /**
   * Consent
   */
  Consent: "consent",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContractTypeCodesCode =
  typeof ContractTypeCodesCode[keyof typeof ContractTypeCodesCode];
