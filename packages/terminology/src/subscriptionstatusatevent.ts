/**
 * A status code for the state of the Subscription.
 * http://terminology.hl7.org/ValueSet/subscription-status-at-event
 */
export const SubscriptionStatusAtEventCode = {
  /**
   * Requested
   */
  Requested: "requested",

  /**
   * Active
   */
  Active: "active",

  /**
   * Error
   */
  Error: "error",

  /**
   * Off
   */
  Off: "off",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionStatusAtEventCode =
  typeof SubscriptionStatusAtEventCode[keyof typeof SubscriptionStatusAtEventCode];
