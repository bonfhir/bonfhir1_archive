/**
 * The 'typical' state. Excludes "nullified" which represents the termination state of a participation instance that was created in error.
 * http://terminology.hl7.org/ValueSet/v3-ManagedParticipationStatusNormal
 */
export const ManagedParticipationStatusNormalCode = {
  /**
   * normal
   */
  normal: "normal",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManagedParticipationStatusNormalCode =
  typeof ManagedParticipationStatusNormalCode[keyof typeof ManagedParticipationStatusNormalCode];
