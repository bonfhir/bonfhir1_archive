/**
 * A constraint domain for RMIM design.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodIntentEvent
 */
export const XActMoodIntentEventCode = {
  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",

  /**
   * intent
   */
  intent: "INT",

  /**
   * desire
   */
  desire: "_ActMoodDesire",

  /**
   * act request
   */
  actrequest: "_ActMoodActRequest",

  /**
   * appointment request
   */
  appointmentrequest: "ARQ",

  /**
   * permission request
   */
  permissionrequest: "PERMRQ",

  /**
   * request
   */
  request: "RQO",

  /**
   * request
   */
  request: "ORD",

  /**
   * proposal
   */
  proposal: "PRP",

  /**
   * recommendation
   */
  recommendation: "RMD",

  /**
   * promise
   */
  promise: "PRMS",

  /**
   * appointment
   */
  appointment: "APT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodIntentEventCode =
  typeof XActMoodIntentEventCode[keyof typeof XActMoodIntentEventCode];
