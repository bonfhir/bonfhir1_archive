/**
 * Reaching a decision through the application of an algorithm designed to weigh the different factors involved.
 * http://terminology.hl7.org/ValueSet/v3-AlgorithmicDecisionObservationMethod
 */
export const AlgorithmicDecisionObservationMethodCode = {
  /**
   * algorithm
   */
  ALGM: "ALGM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AlgorithmicDecisionObservationMethodCode =
  typeof AlgorithmicDecisionObservationMethodCode[keyof typeof AlgorithmicDecisionObservationMethodCode];
