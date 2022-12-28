/**
 * A code or set of codes (e.g., for routine, emergency,) specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.

*Discussion:* This attribute is used in orders to indicate the ordered priority, and in event documentation it indicates the actual priority used to perform the act. In definition mood it indicates the available priorities.
 * http://terminology.hl7.org/ValueSet/v3-ActPriority
 */
export const ActPriorityCode = {
  /**
   * ASAP
   */
  A: "A",

  /**
   * callback results
   */
  CR: "CR",

  /**
   * elective
   */
  EL: "EL",

  /**
   * emergency
   */
  EM: "EM",

  /**
   * preop
   */
  P: "P",

  /**
   * as needed
   */
  PRN: "PRN",

  /**
   * routine
   */
  R: "R",

  /**
   * rush reporting
   */
  RR: "RR",

  /**
   * stat
   */
  S: "S",

  /**
   * timing critical
   */
  T: "T",

  /**
   * use as directed
   */
  UD: "UD",

  /**
   * urgent
   */
  UR: "UR",

  /**
   * callback for scheduling
   */
  CS: "CS",

  /**
   * callback placer for scheduling
   */
  CSP: "CSP",

  /**
   * contact recipient for scheduling
   */
  CSR: "CSR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPriorityCode =
  typeof ActPriorityCode[keyof typeof ActPriorityCode];
