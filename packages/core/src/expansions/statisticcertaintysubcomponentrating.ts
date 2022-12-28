/**
 * The quality rating of the subcomponent of a quality of evidence rating.
 * http://terminology.hl7.org/ValueSet/certainty-subcomponent-rating
 */
export const StatisticCertaintySubcomponentRatingCode = {
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

  /**
   * no serious concern
   */
  "no-concern": "no-concern",

  /**
   * serious concern
   */
  "serious-concern": "serious-concern",

  /**
   * critical concern
   */
  "critical-concern": "critical-concern",

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
