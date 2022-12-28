/**
 * A grouping of Order, Promise and Event moods.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodOrdPrmsEvn
 */
export const XActMoodOrdPrmsEvnCode = {
  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * promise
   */
  PRMS: "PRMS",

  /**
   * request
   */
  RQO: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodOrdPrmsEvnCode =
  typeof XActMoodOrdPrmsEvnCode[keyof typeof XActMoodOrdPrmsEvnCode];
