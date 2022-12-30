/**
 * A status code for the state of the Subscription.
 * http://terminology.hl7.org/ValueSet/subscription-status-at-event
 */
export const SubscriptionStatusAtEventCode = {
  /**
   * Requested
   */
  requested: "requested",

  /**
   * Active
   */
  active: "active",

  /**
   * Error
   */
  error: "error",

  /**
   * Off
   */
  off: "off",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionStatusAtEventCode =
  typeof SubscriptionStatusAtEventCode[keyof typeof SubscriptionStatusAtEventCode];
