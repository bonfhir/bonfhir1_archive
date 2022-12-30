/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SeverityObservationCode
 */
export const SeverityObservationCodeCode = {
  /**
   * Severity Observation
   */
  SEV: "SEV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SeverityObservationCodeCode =
  typeof SeverityObservationCodeCode[keyof typeof SeverityObservationCodeCode];
