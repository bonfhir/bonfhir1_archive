/**
 * A code specifying the state of the Query.
 * http://terminology.hl7.org/ValueSet/v3-QueryStatusCode
 */
export const QueryStatusCodeCode = {
  /**
   * aborted
   */
  aborted: "aborted",

  /**
   * deliveredResponse
   */
  deliveredResponse: "deliveredResponse",

  /**
   * executing
   */
  executing: "executing",

  /**
   * new
   */
  new: "new",

  /**
   * waitContinuedQueryResponse
   */
  waitContinuedQueryResponse: "waitContinuedQueryResponse",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QueryStatusCodeCode =
  typeof QueryStatusCodeCode[keyof typeof QueryStatusCodeCode];
