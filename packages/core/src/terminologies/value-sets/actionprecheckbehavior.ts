/**
 * Defines selection frequency behavior for an action or group.
 * http://hl7.org/fhir/ValueSet/action-precheck-behavior
 */
export const ActionPrecheckBehaviorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionPrecheckBehaviorCode =
  typeof ActionPrecheckBehaviorCode[keyof typeof ActionPrecheckBehaviorCode];
