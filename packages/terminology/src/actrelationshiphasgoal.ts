/**
 * A goal that one defines given a patient's health condition. Subsequently planned actions aim to meet that goal. Source is an observation or condition node, target must be an observation in goal mood.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasGoal
 */
export const ActRelationshipHasGoalCode = {
  /**
   * has goal
   */
  hasgoal: "GOAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasGoalCode =
  typeof ActRelationshipHasGoalCode[keyof typeof ActRelationshipHasGoalCode];
