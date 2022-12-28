/**
 * The type of method used to execute a subscription.
 * http://hl7.org/fhir/ValueSet/subscription-channel-type
 */
export const SubscriptionChannelTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionChannelTypeCode =
  typeof SubscriptionChannelTypeCode[keyof typeof SubscriptionChannelTypeCode];
