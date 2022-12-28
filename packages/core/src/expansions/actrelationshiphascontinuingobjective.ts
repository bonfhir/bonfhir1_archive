/**
 * A desired state that a service action aims to maintain. E.g., keep systolic blood pressure between 90 and 110 mm Hg. Source is an intervention service. Target must be an observation in criterion mood.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasContinuingObjective
 */
export const ActRelationshipHasContinuingObjectiveCode = {
  /**
   * has continuing objective
   */
  OBJC: "OBJC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasContinuingObjectiveCode =
  typeof ActRelationshipHasContinuingObjectiveCode[keyof typeof ActRelationshipHasContinuingObjectiveCode];
