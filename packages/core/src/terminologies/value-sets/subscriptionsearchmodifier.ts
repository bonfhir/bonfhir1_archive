/**
 * FHIR search modifiers allowed for use in Subscriptions and SubscriptionTopics.
 * http://hl7.org/fhir/ValueSet/subscription-search-modifier
 */
export const SubscriptionSearchModifierCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionSearchModifierCode =
  typeof SubscriptionSearchModifierCode[keyof typeof SubscriptionSearchModifierCode];
