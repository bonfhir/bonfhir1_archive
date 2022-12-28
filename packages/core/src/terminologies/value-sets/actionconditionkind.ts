/**
 * Defines the kinds of conditions that can appear on actions.
 * http://hl7.org/fhir/ValueSet/action-condition-kind
 */
export const ActionConditionKindCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionConditionKindCode =
  typeof ActionConditionKindCode[keyof typeof ActionConditionKindCode];
