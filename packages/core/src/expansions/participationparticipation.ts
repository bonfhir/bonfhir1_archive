/**
 * Indicates that the target of the participation is involved in some manner in the act, but does not qualify how.

This should **not** be used except when no more specific participation type is known or when the participation type is further clarified elsewhere. It should not be used lightly, and should never be used as a "placeholder" when a more appropriate specific type does not yet exist.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationParticipation
 */
export const ParticipationParticipationCode = {
  /**
   * Participation
   */
  PART: "PART",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationParticipationCode =
  typeof ParticipationParticipationCode[keyof typeof ParticipationParticipationCode];
