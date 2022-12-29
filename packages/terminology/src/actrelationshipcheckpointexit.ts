/**
 * Condition is a loop checkpoint, i.e. it is a step of an activity plan and, if negative causes the containing loop to exit.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCheckpointExit
 */
export const ActRelationshipCheckpointExitCode = {
  /**
   * exit
   */
  exit: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCheckpointExitCode =
  typeof ActRelationshipCheckpointExitCode[keyof typeof ActRelationshipCheckpointExitCode];
