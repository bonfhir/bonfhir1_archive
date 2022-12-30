/**
 * A location where data about an Act was entered.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationEntryLocation
 */
export const ParticipationEntryLocationCode = {
  /**
   * entry location
   */
  ELOC: "ELOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationEntryLocationCode =
  typeof ParticipationEntryLocationCode[keyof typeof ParticipationEntryLocationCode];
