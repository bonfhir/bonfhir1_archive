/**
 * Participation by human language recorded on a physical material
 * http://terminology.hl7.org/ValueSet/v3-ParticipationModeWritten
 */
export const ParticipationModeWrittenCode = {
  /**
   * written
   */
  WRITTEN: "WRITTEN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationModeWrittenCode =
  typeof ParticipationModeWrittenCode[keyof typeof ParticipationModeWrittenCode];
