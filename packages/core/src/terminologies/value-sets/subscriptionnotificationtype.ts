/**
 * The type of notification represented by the status message.
 * http://hl7.org/fhir/ValueSet/subscription-notification-type
 */
export const SubscriptionNotificationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionNotificationTypeCode =
  typeof SubscriptionNotificationTypeCode[keyof typeof SubscriptionNotificationTypeCode];
