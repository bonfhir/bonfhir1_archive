/**
 * The status of a subscription.
 * http://hl7.org/fhir/ValueSet/subscription-status
 */
export const SubscriptionStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionStatusCodesCode =
  typeof SubscriptionStatusCodesCode[keyof typeof SubscriptionStatusCodesCode];
