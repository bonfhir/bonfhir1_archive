/**
 * A grouping of Order, Promise and Event moods.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodOrdPrmsEvn
 */
export const XActMoodOrdPrmsEvnCode = {
  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",

  /**
   * promise
   */
  promise: "PRMS",

  /**
   * request
   */
  request: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodOrdPrmsEvnCode =
  typeof XActMoodOrdPrmsEvnCode[keyof typeof XActMoodOrdPrmsEvnCode];
