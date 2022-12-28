/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 * http://terminology.hl7.org/ValueSet/risk-probability
 */
export const RiskProbabilityCode = {
  /**
   * Negligible likelihood
   */
  negligible: "negligible",

  /**
   * Low likelihood
   */
  low: "low",

  /**
   * Moderate likelihood
   */
  moderate: "moderate",

  /**
   * High likelihood
   */
  high: "high",

  /**
   * Certain
   */
  certain: "certain",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RiskProbabilityCode =
  typeof RiskProbabilityCode[keyof typeof RiskProbabilityCode];
