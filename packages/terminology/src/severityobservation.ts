/**
 * Potential values for observations of severity.
 * http://terminology.hl7.org/ValueSet/v3-SeverityObservation
 */
export const SeverityObservationCode = {
  /**
   * High
   */
  H: "H",

  /**
   * Low
   */
  L: "L",

  /**
   * Moderate
   */
  M: "M",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SeverityObservationCode =
  typeof SeverityObservationCode[keyof typeof SeverityObservationCode];
