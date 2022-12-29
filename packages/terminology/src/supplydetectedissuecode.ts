/**
 * Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy
 * http://terminology.hl7.org/ValueSet/v3-SupplyDetectedIssueCode
 */
export const SupplyDetectedIssueCodeCode = {
  /**
   * already performed
   */
  alreadyperformed: "ALLDONE",

  /**
   * fulfillment alert
   */
  fulfillmentalert: "FULFIL",

  /**
   * no longer actionable
   */
  nolongeractionable: "NOTACTN",

  /**
   * not equivalent alert
   */
  notequivalentalert: "NOTEQUIV",

  /**
   * not generically equivalent alert
   */
  notgenericallyequivalentalert: "NOTEQUIVGEN",

  /**
   * not therapeutically equivalent alert
   */
  nottherapeuticallyequivalentalert: "NOTEQUIVTHER",

  /**
   * event timing incorrect alert
   */
  eventtimingincorrectalert: "TIMING",

  /**
   * outside requested time
   */
  outsiderequestedtime: "INTERVAL",

  /**
   * too soon within frequency based on the usage
   */
  toosoonwithinfrequencybasedontheusage: "MINFREQ",

  /**
   * held/suspended alert
   */
  heldsuspendedalert: "HELD",

  /**
   * Refill Too Late Alert
   */
  RefillTooLateAlert: "TOOLATE",

  /**
   * Refill Too Soon Alert
   */
  RefillTooSoonAlert: "TOOSOON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SupplyDetectedIssueCodeCode =
  typeof SupplyDetectedIssueCodeCode[keyof typeof SupplyDetectedIssueCodeCode];
