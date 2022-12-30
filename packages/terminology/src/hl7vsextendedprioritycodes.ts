/**
 * Concepts describing the urgency of a request carried in an order.  Used in Version 2 messaging in timing/quantity; in older versions of the Standard was used in the TQ datatype, but in later versions it is used in the TQ1 segment (which replaced the TQ datatype which has been withdrawn).  Many of the codes are widely recognized values used in healthcare settings in the english-speaking world.
 * http://terminology.hl7.org/ValueSet/v2-0485
 */
export const Hl7VSExtendedPriorityCodesCode = {
  /**
   * Stat
   */
  S: "S",

  /**
   * ASAP
   */
  A: "A",

  /**
   * Routine
   */
  R: "R",

  /**
   * Preop
   */
  P: "P",

  /**
   * Callback
   */
  C: "C",

  /**
   * Timing critical
   */
  T: "T",

  /**
   * Timing critical within <integer> seconds.
   */
  "TS<integer>": "TS<integer>",

  /**
   * Timing critical within <integer> minutes.
   */
  "TM<integer>": "TM<integer>",

  /**
   * Timing critical within <integer> hours.
   */
  "TH<integer>": "TH<integer>",

  /**
   * Timing critical within <integer> days.
   */
  "TD<integer>": "TD<integer>",

  /**
   * Timing critical within <integer> weeks.
   */
  "TW<integer>": "TW<integer>",

  /**
   * Timing critical within <integer> months.
   */
  "TL<integer>": "TL<integer>",

  /**
   * As needed
   */
  PRN: "PRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSExtendedPriorityCodesCode =
  typeof Hl7VSExtendedPriorityCodesCode[keyof typeof Hl7VSExtendedPriorityCodesCode];
