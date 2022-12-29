/**
 * **Definition:**An observation that is considered to be desirable to occur in the future. The essential feature of a goal is that if it occurs it would be considered as a marker of a positive outcome or of progress towards a positive outcome.

**Examples:**Target weight below 80Kg, Stop smoking, Regain ability to walk, goal is to administer thrombolytics to candidate patients presenting with acute myocardial infarction.

**Discussion:** INT (intent) reflects a plan for the future, which is a declaration to do something. This contrasts with goal which doesn't represent an intention to act, merely a hope for an eventual result. A goal is distinct from the intended actions to reach that goal. "I will reduce the dose of drug x to 20mg" is an intent. "I hope to be able to get the patient to the point where I can reduce the dose of drug x to 20mg" is a goal. EXPEC (expectation) reflects a prediction rather than a hope. RSK (risk) reflects a potential negative event rather than a hope.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodGoal
 */
export const ActMoodGoalCode = {
  /**
   * Goal
   */
  Goal: "GOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodGoalCode =
  typeof ActMoodGoalCode[keyof typeof ActMoodGoalCode];
