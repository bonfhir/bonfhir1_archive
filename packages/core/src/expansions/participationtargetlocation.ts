/**
 * The facility where the service is done. May be a static building (or room therein) or a moving location (e.g., ambulance, helicopter, aircraft, train, truck, ship, etc.)
 * http://terminology.hl7.org/ValueSet/v3-ParticipationTargetLocation
 */
export const ParticipationTargetLocationCode = {
  /**
   * location
   */
  LOC: "LOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationTargetLocationCode =
  typeof ParticipationTargetLocationCode[keyof typeof ParticipationTargetLocationCode];
