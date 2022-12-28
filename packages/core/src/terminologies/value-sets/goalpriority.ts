/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 * http://hl7.org/fhir/ValueSet/goal-priority
 */
export const GoalPriorityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalPriorityCode =
  typeof GoalPriorityCode[keyof typeof GoalPriorityCode];
