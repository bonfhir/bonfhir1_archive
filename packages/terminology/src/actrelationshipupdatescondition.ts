/**
 * A condition thread relationship specifically links condition nodes together to form a condition thread. The source is the new condition node and the target links to the most recent node of the existing condition thread.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipUpdatesCondition
 */
export const ActRelationshipUpdatesConditionCode = {
  /**
   * updates (condition)
   */
  updatescondition: "UPDT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipUpdatesConditionCode =
  typeof ActRelationshipUpdatesConditionCode[keyof typeof ActRelationshipUpdatesConditionCode];
