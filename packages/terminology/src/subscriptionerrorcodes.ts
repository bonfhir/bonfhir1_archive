/**
 * Codes to represent subscription error details
 * http://terminology.hl7.org/ValueSet/subscription-error
 */
export const SubscriptionErrorCodesCode = {
  /**
   * DNS resolution error
   */
  "dns-resolution-error": "dns-resolution-error",

  /**
   * No response
   */
  "no-response": "no-response",

  /**
   * Error response
   */
  "error-response": "error-response",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionErrorCodesCode =
  typeof SubscriptionErrorCodesCode[keyof typeof SubscriptionErrorCodesCode];
