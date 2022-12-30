/**
 * An intention or plan to perform a service. Historical note: in previous RIM versions, the intent mood was captured as a separate class hierarchy, called Service\_intent\_or\_order.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodIntent
 */
export const ActMoodIntentCode = {
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
export type ActMoodIntentCode =
  typeof ActMoodIntentCode[keyof typeof ActMoodIntentCode];
