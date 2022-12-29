/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 * http://terminology.hl7.org/ValueSet/risk-probability
 */
export const RiskProbabilityCode = {
  /**
   * Negligible likelihood
   */
  Negligiblelikelihood: "negligible",

  /**
   * Low likelihood
   */
  Lowlikelihood: "low",

  /**
   * Moderate likelihood
   */
  Moderatelikelihood: "moderate",

  /**
   * High likelihood
   */
  Highlikelihood: "high",

  /**
   * Certain
   */
  Certain: "certain",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RiskProbabilityCode =
  typeof RiskProbabilityCode[keyof typeof RiskProbabilityCode];
