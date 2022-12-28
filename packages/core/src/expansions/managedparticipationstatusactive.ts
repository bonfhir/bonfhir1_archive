/**
 * The state representing the fact that the Participation is in progress.
 * http://terminology.hl7.org/ValueSet/v3-ManagedParticipationStatusActive
 */
export const ManagedParticipationStatusActiveCode = {
  /**
   * active
   */
  active: "active",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManagedParticipationStatusActiveCode =
  typeof ManagedParticipationStatusActiveCode[keyof typeof ManagedParticipationStatusActiveCode];
