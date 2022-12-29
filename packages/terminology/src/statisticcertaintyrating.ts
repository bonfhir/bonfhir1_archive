/**
 * The relative quality of the statistic.
 * http://terminology.hl7.org/ValueSet/certainty-rating
 */
export const StatisticCertaintyRatingCode = {
  /**
   * High quality
   */
  Highquality: "high",

  /**
   * Moderate quality
   */
  Moderatequality: "moderate",

  /**
   * Low quality
   */
  Lowquality: "low",

  /**
   * Very low quality
   */
  Verylowquality: "very-low",

  /**
   * no serious concern
   */
  noseriousconcern: "no-concern",

  /**
   * serious concern
   */
  seriousconcern: "serious-concern",

  /**
   * very serious concern
   */
  veryseriousconcern: "very-serious-concern",

  /**
   * extremely serious concern
   */
  extremelyseriousconcern: "extremely-serious-concern",

  /**
   * present
   */
  present: "present",

  /**
   * absent
   */
  absent: "absent",

  /**
   * no change to rating
   */
  nochangetorating: "no-change",

  /**
   * reduce rating: -1
   */
  reducerating1: "downcode1",

  /**
   * reduce rating: -2
   */
  reducerating2: "downcode2",

  /**
   * reduce rating: -3
   */
  reducerating3: "downcode3",

  /**
   * increase rating: +1
   */
  increaserating1: "upcode1",

  /**
   * increase rating: +2
   */
  increaserating2: "upcode2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticCertaintyRatingCode =
  typeof StatisticCertaintyRatingCode[keyof typeof StatisticCertaintyRatingCode];
