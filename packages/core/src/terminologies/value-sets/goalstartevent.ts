/**
 * Identifies types of events that might trigger the start of a goal.
 * http://hl7.org/fhir/ValueSet/goal-start-event
 */
export const GoalStartEventCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalStartEventCode =
  typeof GoalStartEventCode[keyof typeof GoalStartEventCode];
