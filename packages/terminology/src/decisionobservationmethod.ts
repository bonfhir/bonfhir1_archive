/**
 * Provides codes for decision methods, initially for assessing the causality of events.
 * http://terminology.hl7.org/ValueSet/v3-DecisionObservationMethod
 */
export const DecisionObservationMethodCode = {
  /**
   * algorithm
   */
  ALGM: "ALGM",

  /**
   * bayesian calculation
   */
  BYCL: "BYCL",

  /**
   * global introspection
   */
  GINT: "GINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DecisionObservationMethodCode =
  typeof DecisionObservationMethodCode[keyof typeof DecisionObservationMethodCode];
