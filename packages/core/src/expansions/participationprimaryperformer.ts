/**
 * The principal or primary performer of the act.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationPrimaryPerformer
 */
export const ParticipationPrimaryPerformerCode = {
  /**
   * primary performer
   */
  PPRF: "PPRF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationPrimaryPerformerCode =
  typeof ParticipationPrimaryPerformerCode[keyof typeof ParticipationPrimaryPerformerCode];
