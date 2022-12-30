/**
 * Condition is tested at the end of a repeated service execution. The service is repeated only if the condition is true (DO service WHILE condition).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCheckpointEnd
 */
export const ActRelationshipCheckpointEndCode = {
  /**
   * end
   */
  E: "E",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCheckpointEndCode =
  typeof ActRelationshipCheckpointEndCode[keyof typeof ActRelationshipCheckpointEndCode];
