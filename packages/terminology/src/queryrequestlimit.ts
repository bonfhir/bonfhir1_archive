/**
 * **Definition:** The number of matching instances (number of focal classes). The document header class is the focal class of a document, a record would therefore be equal to a document.
 * http://terminology.hl7.org/ValueSet/v3-QueryRequestLimit
 */
export const QueryRequestLimitCode = {
  /**
   * QueryRequestLimit
   */
  QueryRequestLimit: "_QueryRequestLimit",

  /**
   * record
   */
  record: "RD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QueryRequestLimitCode =
  typeof QueryRequestLimitCode[keyof typeof QueryRequestLimitCode];
