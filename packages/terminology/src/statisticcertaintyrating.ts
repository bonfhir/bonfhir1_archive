/**
 * The relative quality of the statistic.
 * http://terminology.hl7.org/ValueSet/certainty-rating
 */
export const StatisticCertaintyRatingCode = {
  /**
   * High quality
   */
  high: "high",

  /**
   * Moderate quality
   */
  moderate: "moderate",

  /**
   * Low quality
   */
  low: "low",

  /**
   * Very low quality
   */
  "very-low": "very-low",

  /**
   * no serious concern
   */
  "no-concern": "no-concern",

  /**
   * serious concern
   */
  "serious-concern": "serious-concern",

  /**
   * very serious concern
   */
  "very-serious-concern": "very-serious-concern",

  /**
   * extremely serious concern
   */
  "extremely-serious-concern": "extremely-serious-concern",

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
  "no-change": "no-change",

  /**
   * reduce rating: -1
   */
  downcode1: "downcode1",

  /**
   * reduce rating: -2
   */
  downcode2: "downcode2",

  /**
   * reduce rating: -3
   */
  downcode3: "downcode3",

  /**
   * increase rating: +1
   */
  upcode1: "upcode1",

  /**
   * increase rating: +2
   */
  upcode2: "upcode2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticCertaintyRatingCode =
  typeof StatisticCertaintyRatingCode[keyof typeof StatisticCertaintyRatingCode];
