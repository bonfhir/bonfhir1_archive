/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 * http://terminology.hl7.org/ValueSet/goal-achievement
 */
export const GoalAchievementStatusCode = {
  /**
   * In Progress
   */
  "in-progress": "in-progress",

  /**
   * Achieved
   */
  achieved: "achieved",

  /**
   * Not Achieved
   */
  "not-achieved": "not-achieved",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalAchievementStatusCode =
  typeof GoalAchievementStatusCode[keyof typeof GoalAchievementStatusCode];
