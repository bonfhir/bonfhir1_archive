/**
 * A desired outcome that a service action aims to meet finally. Source is any service (typically an intervention). Target must be an observation in criterion mood.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasFinalObjective
 */
export const ActRelationshipHasFinalObjectiveCode = {
  /**
   * has final objective
   */
  OBJF: "OBJF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasFinalObjectiveCode =
  typeof ActRelationshipHasFinalObjectiveCode[keyof typeof ActRelationshipHasFinalObjectiveCode];
