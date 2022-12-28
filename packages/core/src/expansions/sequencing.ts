/**
 * Specifies sequence of sort order.
 * http://terminology.hl7.org/ValueSet/v3-Sequencing
 */
export const SequencingCode = {
  /**
   * Ascending
   */
  A: "A",

  /**
   * Descending
   */
  D: "D",

  /**
   * None
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SequencingCode = typeof SequencingCode[keyof typeof SequencingCode];
