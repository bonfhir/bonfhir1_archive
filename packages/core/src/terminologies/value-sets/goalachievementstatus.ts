/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 * http://hl7.org/fhir/ValueSet/goal-achievement
 */
export const GoalAchievementStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalAchievementStatusCode =
  typeof GoalAchievementStatusCode[keyof typeof GoalAchievementStatusCode];
