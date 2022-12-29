/**
 * A grouping of Order, Promise. These specific moods are used in orders.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodOrdPrms
 */
export const XActMoodOrdPrmsCode = {
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
export type XActMoodOrdPrmsCode =
  typeof XActMoodOrdPrmsCode[keyof typeof XActMoodOrdPrmsCode];
