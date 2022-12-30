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
   * Improving
   */
  improving: "improving",

  /**
   * Worsening
   */
  worsening: "worsening",

  /**
   * No Change
   */
  "no-change": "no-change",

  /**
   * Achieved
   */
  achieved: "achieved",

  /**
   * Sustaining
   */
  sustaining: "sustaining",

  /**
   * Not Achieved
   */
  "not-achieved": "not-achieved",

  /**
   * No Progress
   */
  "no-progress": "no-progress",

  /**
   * Not Attainable
   */
  "not-attainable": "not-attainable",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalAchievementStatusCode =
  typeof GoalAchievementStatusCode[keyof typeof GoalAchievementStatusCode];
