/**
 * Value Set of codes which specify which type of deferred query resonse is desired, as specified with the query parameters.
 * http://terminology.hl7.org/ValueSet/v2-0107
 */
export const Hl7VSDeferredResponseTypeCode = {
  /**
   * Before the Date/Time specified
   */
  BeforetheDateTimespecified: "B",

  /**
   * Later than the Date/Time specified
   */
  LaterthantheDateTimespecified: "L",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDeferredResponseTypeCode =
  typeof Hl7VSDeferredResponseTypeCode[keyof typeof Hl7VSDeferredResponseTypeCode];
