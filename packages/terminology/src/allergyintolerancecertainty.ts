/**
 * Statement about the degree of clinical certainty that a specific substance was the cause of the manifestation in a reaction event.
 * http://terminology.hl7.org/ValueSet/reaction-event-certainty
 */
export const AllergyIntoleranceCertaintyCode = {
  /**
   * Unlikely
   */
  Unlikely: "unlikely",

  /**
   * Likely
   */
  Likely: "likely",

  /**
   * Confirmed
   */
  Confirmed: "confirmed",

  /**
   * Unknown
   */
  Unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceCertaintyCode =
  typeof AllergyIntoleranceCertaintyCode[keyof typeof AllergyIntoleranceCertaintyCode];
