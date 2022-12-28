/**
 * TODO.
 * http://terminology.hl7.org/ValueSet/adverse-event-causality-method
 */
export const AdverseEventCausalityMethodCode = {
  /**
   * Probability Scale
   */
  "probability-scale": "probability-scale",

  /**
   * Bayesian
   */
  bayesian: "bayesian",

  /**
   * Checklist
   */
  checklist: "checklist",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventCausalityMethodCode =
  typeof AdverseEventCausalityMethodCode[keyof typeof AdverseEventCausalityMethodCode];
