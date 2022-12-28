/**
 * The state representing that fact that the Participation has not yet become active.
 * http://terminology.hl7.org/ValueSet/v3-ManagedParticipationStatusPending
 */
export const ManagedParticipationStatusPendingCode = {
  /**
   * pending
   */
  pending: "pending",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManagedParticipationStatusPendingCode =
  typeof ManagedParticipationStatusPendingCode[keyof typeof ManagedParticipationStatusPendingCode];
