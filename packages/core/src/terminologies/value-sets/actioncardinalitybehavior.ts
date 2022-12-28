/**
 * Defines behavior for an action or a group for how many times that item may be repeated.
 * http://hl7.org/fhir/ValueSet/action-cardinality-behavior
 */
export const ActionCardinalityBehaviorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionCardinalityBehaviorCode =
  typeof ActionCardinalityBehaviorCode[keyof typeof ActionCardinalityBehaviorCode];
