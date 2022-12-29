/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 * http://terminology.hl7.org/ValueSet/goal-achievement
 */
export const GoalAchievementStatusCode = {
  /**
   * In Progress
   */
  InProgress: "in-progress",

  /**
   * Improving
   */
  Improving: "improving",

  /**
   * Worsening
   */
  Worsening: "worsening",

  /**
   * No Change
   */
  NoChange: "no-change",

  /**
   * Achieved
   */
  Achieved: "achieved",

  /**
   * Sustaining
   */
  Sustaining: "sustaining",

  /**
   * Not Achieved
   */
  NotAchieved: "not-achieved",

  /**
   * No Progress
   */
  NoProgress: "no-progress",

  /**
   * Not Attainable
   */
  NotAttainable: "not-attainable",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalAchievementStatusCode =
  typeof GoalAchievementStatusCode[keyof typeof GoalAchievementStatusCode];
