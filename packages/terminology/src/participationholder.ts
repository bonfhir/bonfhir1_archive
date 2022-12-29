/**
 * Participant who posses an instrument such as a financial contract (insurance policy) usually based on some agreement with the author.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationHolder
 */
export const ParticipationHolderCode = {
  /**
   * holder
   */
  holder: "HLD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationHolderCode =
  typeof ParticipationHolderCode[keyof typeof ParticipationHolderCode];
