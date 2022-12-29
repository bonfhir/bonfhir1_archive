/**
 * The severity of the adverse event itself, in direct relation to the subject.
 * http://terminology.hl7.org/ValueSet/adverse-event-severity
 */
export const AdverseEventSeverityCode = {
  /**
   * Mild
   */
  Mild: "mild",

  /**
   * Moderate
   */
  Moderate: "moderate",

  /**
   * Severe
   */
  Severe: "severe",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventSeverityCode =
  typeof AdverseEventSeverityCode[keyof typeof AdverseEventSeverityCode];
