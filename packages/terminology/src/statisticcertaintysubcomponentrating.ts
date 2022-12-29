/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 * http://terminology.hl7.org/ValueSet/certainty-subcomponent-rating
 */
export const StatisticCertaintySubcomponentRatingCode = {
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

  /**
   * no serious concern
   */
  noseriousconcern: "no-concern",

  /**
   * serious concern
   */
  seriousconcern: "serious-concern",

  /**
   * critical concern
   */
  criticalconcern: "critical-concern",

  /**
   * present
   */
  present: "present",

  /**
   * absent
   */
  absent: "absent",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatisticCertaintySubcomponentRatingCode =
  typeof StatisticCertaintySubcomponentRatingCode[keyof typeof StatisticCertaintySubcomponentRatingCode];
