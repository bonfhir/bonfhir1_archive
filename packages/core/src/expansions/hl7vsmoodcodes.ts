/**
 * Value Set of codes that specify the functional state of an order.
 * http://terminology.hl7.org/ValueSet/v2-0725
 */
export const Hl7VSMoodCodesCode = {
  /**
   * intent
   */
  INT: "INT",

  /**
   * appointment
   */
  APT: "APT",

  /**
   * appointment request
   */
  ARQ: "ARQ",

  /**
   * promise
   */
  PRMS: "PRMS",

  /**
   * proposal
   */
  PRP: "PRP",

  /**
   * request
   */
  RQO: "RQO",

  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * event criterion
   */
  "EVN.CRT": "EVN.CRT",

  /**
   * expectation
   */
  EXPEC: "EXPEC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMoodCodesCode =
  typeof Hl7VSMoodCodesCode[keyof typeof Hl7VSMoodCodesCode];
