/**
 * The destination for services. May be a static building (or room therein) or a movable facility (e.g., ship).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationDestination
 */
export const ParticipationDestinationCode = {
  /**
   * destination
   */
  DST: "DST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationDestinationCode =
  typeof ParticipationDestinationCode[keyof typeof ParticipationDestinationCode];
