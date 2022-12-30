/**
 * Specifies the mode, immediate versus deferred or queued, by which a receiver should communicate its receiver responsibilities.
 * http://terminology.hl7.org/ValueSet/v3-ResponseMode
 */
export const ResponseModeCode = {
  /**
   * deferred
   */
  D: "D",

  /**
   * immediate
   */
  I: "I",

  /**
   * queue
   */
  Q: "Q",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResponseModeCode =
  typeof ResponseModeCode[keyof typeof ResponseModeCode];
