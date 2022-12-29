/**
 * Condition is tested every time before execution of the service (WHILE condition DO service).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCheckpointBeginning
 */
export const ActRelationshipCheckpointBeginningCode = {
  /**
   * beginning
   */
  beginning: "B",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCheckpointBeginningCode =
  typeof ActRelationshipCheckpointBeginningCode[keyof typeof ActRelationshipCheckpointBeginningCode];
