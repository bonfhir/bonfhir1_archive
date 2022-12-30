/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ProbabilityDistributionType
 */
export const ProbabilityDistributionTypeCode = {
  /**
   * beta
   */
  B: "B",

  /**
   * exponential
   */
  E: "E",

  /**
   * F
   */
  F: "F",

  /**
   * (gamma)
   */
  G: "G",

  /**
   * log-normal
   */
  LN: "LN",

  /**
   * normal (Gaussian)
   */
  N: "N",

  /**
   * T
   */
  T: "T",

  /**
   * uniform
   */
  U: "U",

  /**
   * chi square
   */
  X2: "X2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProbabilityDistributionTypeCode =
  typeof ProbabilityDistributionTypeCode[keyof typeof ProbabilityDistributionTypeCode];
