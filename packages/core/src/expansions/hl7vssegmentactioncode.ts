/**
 * Concepts specifying actions to be applied for segments when an HL7 version 2 interface is operating in "action code mode" (a kind of update mode in the Standard).
 * http://terminology.hl7.org/ValueSet/v2-0206
 */
export const Hl7VSSegmentActionCodeCode = {
  /**
   * Add/Insert
   */
  A: "A",

  /**
   * Delete
   */
  D: "D",

  /**
   * Used in Snapshot mode
   */
  S: "S",

  /**
   * Update
   */
  U: "U",

  /**
   * No Change
   */
  X: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSegmentActionCodeCode =
  typeof Hl7VSSegmentActionCodeCode[keyof typeof Hl7VSSegmentActionCodeCode];
