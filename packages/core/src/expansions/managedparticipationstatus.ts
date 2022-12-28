/**
 * Codes representing the defined possible states of a Managed Participation, as defined by the Managed Participation class state machine.
 * http://terminology.hl7.org/ValueSet/v3-ManagedParticipationStatus
 */
export const ManagedParticipationStatusCode = {
  /**
   * normal
   */
  normal: "normal",

  /**
   * nullified
   */
  nullified: "nullified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManagedParticipationStatusCode =
  typeof ManagedParticipationStatusCode[keyof typeof ManagedParticipationStatusCode];
