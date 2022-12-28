/**
 * Defines organization behavior of a group.
 * http://hl7.org/fhir/ValueSet/action-grouping-behavior
 */
export const ActionGroupingBehaviorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionGroupingBehaviorCode =
  typeof ActionGroupingBehaviorCode[keyof typeof ActionGroupingBehaviorCode];
