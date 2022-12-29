/**
 * Potential values for observations of severity.
 * http://terminology.hl7.org/ValueSet/v3-SeverityObservation
 */
export const SeverityObservationCode = {
  /**
   * High
   */
  High: "H",

  /**
   * Low
   */
  Low: "L",

  /**
   * Moderate
   */
  Moderate: "M",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SeverityObservationCode =
  typeof SeverityObservationCode[keyof typeof SeverityObservationCode];
