/**
 * Value Set of codes allowing the placer (sending) application to determine the amount of information to be returned from the filler.
 * http://terminology.hl7.org/ValueSet/v2-0121
 */
export const Hl7VSResponseFlagCode = {
  /**
   * Report exceptions only
   */
  E: "E",

  /**
   * Same as E, also Replacement and Parent-Child
   */
  R: "R",

  /**
   * Same as R, also other associated segments
   */
  D: "D",

  /**
   * Same as D, plus confirmations explicitly
   */
  F: "F",

  /**
   * Only the MSA segment is returned
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSResponseFlagCode =
  typeof Hl7VSResponseFlagCode[keyof typeof Hl7VSResponseFlagCode];
