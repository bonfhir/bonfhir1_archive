/**
 * Codes to represent subscription error details
 * http://terminology.hl7.org/ValueSet/subscription-error
 */
export const SubscriptionErrorCodesCode = {
  /**
   * DNS resolution error
   */
  DNSresolutionerror: "dns-resolution-error",

  /**
   * No response
   */
  Noresponse: "no-response",

  /**
   * Error response
   */
  Errorresponse: "error-response",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionErrorCodesCode =
  typeof SubscriptionErrorCodesCode[keyof typeof SubscriptionErrorCodesCode];
