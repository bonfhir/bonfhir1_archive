/**
 * A code classifying the general nature of the response to a given query. Includes whether or not data was found, or whether an error occurred.
 * http://terminology.hl7.org/ValueSet/v3-QueryResponse
 */
export const QueryResponseCode = {
  /**
   * ApplicationError
   */
  AE: "AE",

  /**
   * No data found
   */
  NF: "NF",

  /**
   * Data found
   */
  OK: "OK",

  /**
   * QueryParameterError
   */
  QE: "QE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QueryResponseCode =
  typeof QueryResponseCode[keyof typeof QueryResponseCode];
