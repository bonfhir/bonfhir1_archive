/**
 * The terminal state representing the successful completion of the Participation.
 * http://terminology.hl7.org/ValueSet/v3-ManagedParticipationStatusCompleted
 */
export const ManagedParticipationStatusCompletedCode = {
  /**
   * completed
   */
  completed: "completed",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManagedParticipationStatusCompletedCode =
  typeof ManagedParticipationStatusCompletedCode[keyof typeof ManagedParticipationStatusCompletedCode];
