/**
 * Status codes of record operations.
 * http://terminology.hl7.org/ValueSet/v2-0323
 */
export const Hl7VSActionCodeCode = {
  /**
   * Add/Insert
   */
  AddInsert: "A",

  /**
   * Delete
   */
  Delete: "D",

  /**
   * Update
   */
  Update: "U",

  /**
   * No change
   */
  Nochange: "X",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSActionCodeCode =
  typeof Hl7VSActionCodeCode[keyof typeof Hl7VSActionCodeCode];
