/**
 * Concepts which specify the maximum length of a query response that can be accepted by a requesting system, and are expressed as units of mesaure of query response objects.
 * http://terminology.hl7.org/ValueSet/v2-0126
 */
export const Hl7VSQuantityLimitedRequestCode = {
  /**
   * Characters
   */
  CH: "CH",

  /**
   * Lines
   */
  LI: "LI",

  /**
   * Pages
   */
  PG: "PG",

  /**
   * Records
   */
  RD: "RD",

  /**
   * Locally defined
   */
  ZO: "ZO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSQuantityLimitedRequestCode =
  typeof Hl7VSQuantityLimitedRequestCode[keyof typeof Hl7VSQuantityLimitedRequestCode];
