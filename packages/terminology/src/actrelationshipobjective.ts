/**
 * The target act is a desired outcome of the source act. Source is any act (typically an intervention). Target must be an observation in criterion mood.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipObjective
 */
export const ActRelationshipObjectiveCode = {
  /**
   * has continuing objective
   */
  hascontinuingobjective: "OBJC",

  /**
   * has final objective
   */
  hasfinalobjective: "OBJF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipObjectiveCode =
  typeof ActRelationshipObjectiveCode[keyof typeof ActRelationshipObjectiveCode];
