/**
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 * http://hl7.org/fhir/ValueSet/interaction-trigger
 */
export const InteractionTriggerCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InteractionTriggerCode =
  typeof InteractionTriggerCode[keyof typeof InteractionTriggerCode];
