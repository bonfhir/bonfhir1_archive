/**
 * Identifies the time frame in which the response is expected.
 * http://terminology.hl7.org/ValueSet/v3-QueryPriority
 */
export const QueryPriorityCode = {
  /**
   * Deferred
   */
  Deferred: "D",

  /**
   * Immediate
   */
  Immediate: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QueryPriorityCode =
  typeof QueryPriorityCode[keyof typeof QueryPriorityCode];
