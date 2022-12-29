/**
 * Value Set of codes that specify the functional state of an order.
 * http://terminology.hl7.org/ValueSet/v2-0725
 */
export const Hl7VSMoodCodesCode = {
  /**
   * intent
   */
  intent: "INT",

  /**
   * appointment
   */
  appointment: "APT",

  /**
   * appointment request
   */
  appointmentrequest: "ARQ",

  /**
   * promise
   */
  promise: "PRMS",

  /**
   * proposal
   */
  proposal: "PRP",

  /**
   * request
   */
  request: "RQO",

  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",

  /**
   * event criterion
   */
  eventcriterion: "EVN.CRT",

  /**
   * expectation
   */
  expectation: "EXPEC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMoodCodesCode =
  typeof Hl7VSMoodCodesCode[keyof typeof Hl7VSMoodCodesCode];
