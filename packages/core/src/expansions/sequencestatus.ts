/**
 * Codes providing the status of the variant test result.
 * http://terminology.hl7.org/ValueSet/variant-state
 */
export const SequenceStatusCode = {
  /**
   * positive
   */
  positive: "positive",

  /**
   * negative
   */
  negative: "negative",

  /**
   * absent
   */
  absent: "absent",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SequenceStatusCode =
  typeof SequenceStatusCode[keyof typeof SequenceStatusCode];
