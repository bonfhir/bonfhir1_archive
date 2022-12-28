/**
 * Codes to represent subscription error details
 * http://hl7.org/fhir/ValueSet/subscription-error
 */
export const SubscriptionErrorCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionErrorCodesCode =
  typeof SubscriptionErrorCodesCode[keyof typeof SubscriptionErrorCodesCode];
