/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ProbabilityDistributionType
 */
export const ProbabilityDistributionTypeCode = {
  /**
   * beta
   */
  beta: "B",

  /**
   * exponential
   */
  exponential: "E",

  /**
   * F
   */
  F: "F",

  /**
   * (gamma)
   */
  gamma: "G",

  /**
   * log-normal
   */
  lognormal: "LN",

  /**
   * normal (Gaussian)
   */
  normalGaussian: "N",

  /**
   * T
   */
  T: "T",

  /**
   * uniform
   */
  uniform: "U",

  /**
   * chi square
   */
  chisquare: "X2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProbabilityDistributionTypeCode =
  typeof ProbabilityDistributionTypeCode[keyof typeof ProbabilityDistributionTypeCode];
