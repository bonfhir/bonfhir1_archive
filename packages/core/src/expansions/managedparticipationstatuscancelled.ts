/**
 * The terminal state resulting from cancellation of the Participation prior to activation.
 * http://terminology.hl7.org/ValueSet/v3-ManagedParticipationStatusCancelled
 */
export const ManagedParticipationStatusCancelledCode = {
  /**
   * cancelled
   */
  cancelled: "cancelled",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManagedParticipationStatusCancelledCode =
  typeof ManagedParticipationStatusCancelledCode[keyof typeof ManagedParticipationStatusCancelledCode];
