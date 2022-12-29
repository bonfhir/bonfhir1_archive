/**
 * A code or set of codes (e.g., for routine, emergency,) specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.

*Discussion:* This attribute is used in orders to indicate the ordered priority, and in event documentation it indicates the actual priority used to perform the act. In definition mood it indicates the available priorities.
 * http://terminology.hl7.org/ValueSet/v3-ActPriority
 */
export const ActPriorityCode = {
  /**
   * ASAP
   */
  ASAP: "A",

  /**
   * callback results
   */
  callbackresults: "CR",

  /**
   * elective
   */
  elective: "EL",

  /**
   * emergency
   */
  emergency: "EM",

  /**
   * preop
   */
  preop: "P",

  /**
   * as needed
   */
  asneeded: "PRN",

  /**
   * routine
   */
  routine: "R",

  /**
   * rush reporting
   */
  rushreporting: "RR",

  /**
   * stat
   */
  stat: "S",

  /**
   * timing critical
   */
  timingcritical: "T",

  /**
   * use as directed
   */
  useasdirected: "UD",

  /**
   * urgent
   */
  urgent: "UR",

  /**
   * callback for scheduling
   */
  callbackforscheduling: "CS",

  /**
   * callback placer for scheduling
   */
  callbackplacerforscheduling: "CSP",

  /**
   * contact recipient for scheduling
   */
  contactrecipientforscheduling: "CSR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPriorityCode =
  typeof ActPriorityCode[keyof typeof ActPriorityCode];
