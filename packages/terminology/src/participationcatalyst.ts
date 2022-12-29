/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ParticipationCatalyst
 */
export const ParticipationCatalystCode = {
  /**
   * catalyst
   */
  catalyst: "CAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationCatalystCode =
  typeof ParticipationCatalystCode[keyof typeof ParticipationCatalystCode];
