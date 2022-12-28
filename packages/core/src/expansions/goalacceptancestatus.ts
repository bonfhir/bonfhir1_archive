/**
 * Codes indicating whether the goal has been accepted by a stakeholder.
 * http://terminology.hl7.org/ValueSet/goal-acceptance-status
 */
export const GoalAcceptanceStatusCode = {
  /**
   * Agree
   */
  agree: "agree",

  /**
   * Disagree
   */
  disagree: "disagree",

  /**
   * Pending
   */
  pending: "pending",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalAcceptanceStatusCode =
  typeof GoalAcceptanceStatusCode[keyof typeof GoalAcceptanceStatusCode];
