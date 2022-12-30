/**
 * A person assisting in an act through his substantial presence and involvement This includes: assistants, technicians, associates, or whatever the job titles may be.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationSecondaryPerformer
 */
export const ParticipationSecondaryPerformerCode = {
  /**
   * secondary performer
   */
  SPRF: "SPRF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationSecondaryPerformerCode =
  typeof ParticipationSecondaryPerformerCode[keyof typeof ParticipationSecondaryPerformerCode];
