/**
 * Defines selection behavior of a group.
 * http://hl7.org/fhir/ValueSet/action-selection-behavior
 */
export const ActionSelectionBehaviorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionSelectionBehaviorCode =
  typeof ActionSelectionBehaviorCode[keyof typeof ActionSelectionBehaviorCode];
