/**
 * Value Set of codes identifying how the field or parameter will be sorted and, if sorted, whether the sort will be case sensitive (the default) or not.
 * http://terminology.hl7.org/ValueSet/v2-0397
 */
export const Hl7VSSequencingCode = {
  /**
   * Ascending
   */
  A: "A",

  /**
   * Ascending, case insensitive
   */
  AN: "AN",

  /**
   * Descending
   */
  D: "D",

  /**
   * Descending, case insensitive
   */
  DN: "DN",

  /**
   * None
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSequencingCode =
  typeof Hl7VSSequencingCode[keyof typeof Hl7VSSequencingCode];
