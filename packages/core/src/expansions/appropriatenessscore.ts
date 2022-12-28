/**
 * The scoring for appropriateness of an action based upon RAND.
 * http://terminology.hl7.org/ValueSet/appropriateness-score
 */
export const AppropriatenessScoreCode = {
  /**
   * Extremely Inappropriate
   */
  "extremely-inappropriate": "extremely-inappropriate",

  /**
   * Inappropriate
   */
  inappropriate: "inappropriate",

  /**
   * Probably Inappropriate
   */
  "probably-inappropriate": "probably-inappropriate",

  /**
   * Uncertain Inappropriate
   */
  "uncertain-inappropriate": "uncertain-inappropriate",

  /**
   * Uncertain
   */
  uncertain: "uncertain",

  /**
   * Uncertain Appropriate
   */
  "uncertain-appropriate": "uncertain-appropriate",

  /**
   * Probably Appropriate
   */
  "probably-appropriate": "probably-appropriate",

  /**
   * Appropriate
   */
  appropriate: "appropriate",

  /**
   * Extremely Appropriate
   */
  "extremely-appropriate": "extremely-appropriate",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AppropriatenessScoreCode =
  typeof AppropriatenessScoreCode[keyof typeof AppropriatenessScoreCode];
