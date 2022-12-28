/**
 * A relationship from an Act to a Control Variable. For example, if a Device makes an Observation, this relates the Observation to its Control Variables documenting the device's settings that influenced the observation.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasControlVariable
 */
export const ActRelationshipHasControlVariableCode = {
  /**
   * has control variable
   */
  CTRLV: "CTRLV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasControlVariableCode =
  typeof ActRelationshipHasControlVariableCode[keyof typeof ActRelationshipHasControlVariableCode];
