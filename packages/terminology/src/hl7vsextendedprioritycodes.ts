/**
 * Concepts describing the urgency of a request carried in an order.  Used in Version 2 messaging in timing/quantity; in older versions of the Standard was used in the TQ datatype, but in later versions it is used in the TQ1 segment (which replaced the TQ datatype which has been withdrawn).  Many of the codes are widely recognized values used in healthcare settings in the english-speaking world.
 * http://terminology.hl7.org/ValueSet/v2-0485
 */
export const Hl7VSExtendedPriorityCodesCode = {
  /**
   * Stat
   */
  Stat: "S",

  /**
   * ASAP
   */
  ASAP: "A",

  /**
   * Routine
   */
  Routine: "R",

  /**
   * Preop
   */
  Preop: "P",

  /**
   * Callback
   */
  Callback: "C",

  /**
   * Timing critical
   */
  Timingcritical: "T",

  /**
   * Timing critical within <integer> seconds.
   */
  Timingcriticalwithinintegerseconds: "TS<integer>",

  /**
   * Timing critical within <integer> minutes.
   */
  Timingcriticalwithinintegerminutes: "TM<integer>",

  /**
   * Timing critical within <integer> hours.
   */
  Timingcriticalwithinintegerhours: "TH<integer>",

  /**
   * Timing critical within <integer> days.
   */
  Timingcriticalwithinintegerdays: "TD<integer>",

  /**
   * Timing critical within <integer> weeks.
   */
  Timingcriticalwithinintegerweeks: "TW<integer>",

  /**
   * Timing critical within <integer> months.
   */
  Timingcriticalwithinintegermonths: "TL<integer>",

  /**
   * As needed
   */
  Asneeded: "PRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSExtendedPriorityCodesCode =
  typeof Hl7VSExtendedPriorityCodesCode[keyof typeof Hl7VSExtendedPriorityCodesCode];
