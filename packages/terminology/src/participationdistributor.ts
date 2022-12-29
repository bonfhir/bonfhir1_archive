/**
 * Distributes material used in or generated during the act.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationDistributor
 */
export const ParticipationDistributorCode = {
  /**
   * distributor
   */
  distributor: "DIST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationDistributorCode =
  typeof ParticipationDistributorCode[keyof typeof ParticipationDistributorCode];
