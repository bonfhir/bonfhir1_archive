/**
 * Tags to put on a resource after subscriptions have been sent.
 * http://terminology.hl7.org/ValueSet/subscription-tag
 */
export const SubscriptionTagCode = {
  /**
   * Queued
   */
  Queued: "queued",

  /**
   * Delivered
   */
  Delivered: "delivered",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionTagCode =
  typeof SubscriptionTagCode[keyof typeof SubscriptionTagCode];
