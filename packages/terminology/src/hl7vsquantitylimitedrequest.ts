/**
 * Concepts which specify the maximum length of a query response that can be accepted by a requesting system, and are expressed as units of mesaure of query response objects.
 * http://terminology.hl7.org/ValueSet/v2-0126
 */
export const Hl7VSQuantityLimitedRequestCode = {
  /**
   * Characters
   */
  Characters: "CH",

  /**
   * Lines
   */
  Lines: "LI",

  /**
   * Pages
   */
  Pages: "PG",

  /**
   * Records
   */
  Records: "RD",

  /**
   * Locally defined
   */
  Locallydefined: "ZO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSQuantityLimitedRequestCode =
  typeof Hl7VSQuantityLimitedRequestCode[keyof typeof Hl7VSQuantityLimitedRequestCode];
