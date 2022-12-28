/**
 * Condition must be true throughout the execution and the service is interrupted (asynchronously) as soon as the condition turns false (asynchronous WHILE loop). The service must be interruptible.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCheckpointThrough
 */
export const ActRelationshipCheckpointThroughCode = {
  /**
   * through
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCheckpointThroughCode =
  typeof ActRelationshipCheckpointThroughCode[keyof typeof ActRelationshipCheckpointThroughCode];
