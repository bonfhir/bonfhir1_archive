/**
 * Concepts defining precise response status concepts in support of HL7 Version 2 query messaging.
 * http://terminology.hl7.org/ValueSet/v2-0208
 */
export const Hl7VSQueryResponseStatusCode = {
  /**
   * Data found, no errors (this is the default)
   */
  Datafoundnoerrorsthisisthedefault: "OK",

  /**
   * No data found, no errors
   */
  Nodatafoundnoerrors: "NF",

  /**
   * Application error
   */
  Applicationerror: "AE",

  /**
   * Application reject
   */
  Applicationreject: "AR",

  /**
   * Too much data found
   */
  Toomuchdatafound: "TM",

  /**
   * Protected data
   */
  Protecteddata: "PD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSQueryResponseStatusCode =
  typeof Hl7VSQueryResponseStatusCode[keyof typeof Hl7VSQueryResponseStatusCode];
