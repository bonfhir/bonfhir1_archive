/**
 * Concepts which specify a time frame in which a querry response is expected.
 * http://terminology.hl7.org/ValueSet/v2-0091
 */
export const Hl7VSQueryPriorityCode = {
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
export type Hl7VSQueryPriorityCode =
  typeof Hl7VSQueryPriorityCode[keyof typeof Hl7VSQueryPriorityCode];
