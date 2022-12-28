/**
 * This value set includes sample Payee Type codes.
 * http://terminology.hl7.org/ValueSet/payeetype
 */
export const ClaimPayeeTypeCodesCode = {
  /**
   * Subscriber
   */
  subscriber: "subscriber",

  /**
   * Provider
   */
  provider: "provider",

  /**
   * Other
   */
  other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimPayeeTypeCodesCode =
  typeof ClaimPayeeTypeCodesCode[keyof typeof ClaimPayeeTypeCodesCode];
