/**
 * Defines expectations around whether an action or action group is required.
 * http://hl7.org/fhir/ValueSet/action-required-behavior
 */
export const ActionRequiredBehaviorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionRequiredBehaviorCode =
  typeof ActionRequiredBehaviorCode[keyof typeof ActionRequiredBehaviorCode];
