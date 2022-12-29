/**
 * The scoring for appropriateness of an action based upon RAND.
 * http://terminology.hl7.org/ValueSet/appropriateness-score
 */
export const AppropriatenessScoreCode = {
  /**
   * Extremely Inappropriate
   */
  ExtremelyInappropriate: "extremely-inappropriate",

  /**
   * Inappropriate
   */
  Inappropriate: "inappropriate",

  /**
   * Probably Inappropriate
   */
  ProbablyInappropriate: "probably-inappropriate",

  /**
   * Uncertain Inappropriate
   */
  UncertainInappropriate: "uncertain-inappropriate",

  /**
   * Uncertain
   */
  Uncertain: "uncertain",

  /**
   * Uncertain Appropriate
   */
  UncertainAppropriate: "uncertain-appropriate",

  /**
   * Probably Appropriate
   */
  ProbablyAppropriate: "probably-appropriate",

  /**
   * Appropriate
   */
  Appropriate: "appropriate",

  /**
   * Extremely Appropriate
   */
  ExtremelyAppropriate: "extremely-appropriate",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AppropriatenessScoreCode =
  typeof AppropriatenessScoreCode[keyof typeof AppropriatenessScoreCode];
