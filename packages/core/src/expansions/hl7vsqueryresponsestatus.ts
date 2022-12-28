/**
 * Concepts defining precise response status concepts in support of HL7 Version 2 query messaging.
 * http://terminology.hl7.org/ValueSet/v2-0208
 */
export const Hl7VSQueryResponseStatusCode = {
  /**
   * Data found, no errors (this is the default)
   */
  OK: "OK",

  /**
   * No data found, no errors
   */
  NF: "NF",

  /**
   * Application error
   */
  AE: "AE",

  /**
   * Application reject
   */
  AR: "AR",

  /**
   * Too much data found
   */
  TM: "TM",

  /**
   * Protected data
   */
  PD: "PD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSQueryResponseStatusCode =
  typeof Hl7VSQueryResponseStatusCode[keyof typeof Hl7VSQueryResponseStatusCode];
