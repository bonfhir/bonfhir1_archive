/**
 * Value Set of codes identifying how the field or parameter will be sorted and, if sorted, whether the sort will be case sensitive (the default) or not.
 * http://terminology.hl7.org/ValueSet/v2-0397
 */
export const Hl7VSSequencingCode = {
  /**
   * Ascending
   */
  Ascending: "A",

  /**
   * Ascending, case insensitive
   */
  Ascendingcaseinsensitive: "AN",

  /**
   * Descending
   */
  Descending: "D",

  /**
   * Descending, case insensitive
   */
  Descendingcaseinsensitive: "DN",

  /**
   * None
   */
  None: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSequencingCode =
  typeof Hl7VSSequencingCode[keyof typeof Hl7VSSequencingCode];
