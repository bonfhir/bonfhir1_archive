/**
 * A constraint domain for RMIM design.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodIntentEvent
 */
export const XActMoodIntentEventCode = {
  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * intent
   */
  INT: "INT",

  /**
   * desire
   */
  _ActMoodDesire: "_ActMoodDesire",

  /**
   * act request
   */
  _ActMoodActRequest: "_ActMoodActRequest",

  /**
   * appointment request
   */
  ARQ: "ARQ",

  /**
   * permission request
   */
  PERMRQ: "PERMRQ",

  /**
   * request
   */
  RQO: "RQO",

  /**
   * request
   */
  ORD: "ORD",

  /**
   * proposal
   */
  PRP: "PRP",

  /**
   * recommendation
   */
  RMD: "RMD",

  /**
   * promise
   */
  PRMS: "PRMS",

  /**
   * appointment
   */
  APT: "APT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodIntentEventCode =
  typeof XActMoodIntentEventCode[keyof typeof XActMoodIntentEventCode];
