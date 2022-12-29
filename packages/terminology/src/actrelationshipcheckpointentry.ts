/**
 * Condition is tested once before the service is executed (IF condition THEN service).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipCheckpointEntry
 */
export const ActRelationshipCheckpointEntryCode = {
  /**
   * entry
   */
  entry: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipCheckpointEntryCode =
  typeof ActRelationshipCheckpointEntryCode[keyof typeof ActRelationshipCheckpointEntryCode];
