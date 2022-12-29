/**
 * A goal-evaluation links an observation (intent or actual) to a goal to indicate that the observation evaluates the goal. Given the goal and the observation, a "goal distance" (e.g., goal to observation) can be "calculated" and need not be sent explicitly.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEvaluatesGoal
 */
export const ActRelationshipEvaluatesGoalCode = {
  /**
   * evaluates (goal)
   */
  evaluatesgoal: "GEVL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEvaluatesGoalCode =
  typeof ActRelationshipEvaluatesGoalCode[keyof typeof ActRelationshipEvaluatesGoalCode];
