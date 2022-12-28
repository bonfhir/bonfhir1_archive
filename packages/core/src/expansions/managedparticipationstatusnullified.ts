/**
 * The state representing the termination of a Participation instance that was created in error.
 * http://terminology.hl7.org/ValueSet/v3-ManagedParticipationStatusNullified
 */
export const ManagedParticipationStatusNullifiedCode = {
  /**
   * nullified
   */
  nullified: "nullified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManagedParticipationStatusNullifiedCode =
  typeof ManagedParticipationStatusNullifiedCode[keyof typeof ManagedParticipationStatusNullifiedCode];
