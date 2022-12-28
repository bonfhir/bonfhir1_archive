/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 * http://terminology.hl7.org/ValueSet/goal-priority
 */
export const GoalPriorityCode = {
  /**
   * High Priority
   */
  "high-priority": "high-priority",

  /**
   * Medium Priority
   */
  "medium-priority": "medium-priority",

  /**
   * Low Priority
   */
  "low-priority": "low-priority",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalPriorityCode =
  typeof GoalPriorityCode[keyof typeof GoalPriorityCode];
