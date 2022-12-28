/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 * http://hl7.org/fhir/ValueSet/goal-status
 */
export const GoalLifecycleStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalLifecycleStatusCode =
  typeof GoalLifecycleStatusCode[keyof typeof GoalLifecycleStatusCode];
