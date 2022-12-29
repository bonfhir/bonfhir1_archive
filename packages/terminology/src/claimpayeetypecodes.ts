/**
 * This value set includes sample Payee Type codes.
 * http://terminology.hl7.org/ValueSet/payeetype
 */
export const ClaimPayeeTypeCodesCode = {
  /**
   * Subscriber
   */
  Subscriber: "subscriber",

  /**
   * Provider
   */
  Provider: "provider",

  /**
   * Other
   */
  Other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClaimPayeeTypeCodesCode =
  typeof ClaimPayeeTypeCodesCode[keyof typeof ClaimPayeeTypeCodesCode];
