/**
 * Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy
 * http://terminology.hl7.org/ValueSet/v3-SupplyDetectedIssueCode
 */
export const SupplyDetectedIssueCodeCode = {
  /**
   * already performed
   */
  ALLDONE: "ALLDONE",

  /**
   * fulfillment alert
   */
  FULFIL: "FULFIL",

  /**
   * no longer actionable
   */
  NOTACTN: "NOTACTN",

  /**
   * not equivalent alert
   */
  NOTEQUIV: "NOTEQUIV",

  /**
   * not generically equivalent alert
   */
  NOTEQUIVGEN: "NOTEQUIVGEN",

  /**
   * not therapeutically equivalent alert
   */
  NOTEQUIVTHER: "NOTEQUIVTHER",

  /**
   * event timing incorrect alert
   */
  TIMING: "TIMING",

  /**
   * outside requested time
   */
  INTERVAL: "INTERVAL",

  /**
   * too soon within frequency based on the usage
   */
  MINFREQ: "MINFREQ",

  /**
   * held/suspended alert
   */
  HELD: "HELD",

  /**
   * Refill Too Late Alert
   */
  TOOLATE: "TOOLATE",

  /**
   * Refill Too Soon Alert
   */
  TOOSOON: "TOOSOON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyDetectedIssueCodeCode =
  typeof SupplyDetectedIssueCodeCode[keyof typeof SupplyDetectedIssueCodeCode];
