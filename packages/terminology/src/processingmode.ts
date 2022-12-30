/**
 * This attribute defines whether the message is being sent in current processing, archive mode, initial load mode, restore from archive mode, etc.
 * http://terminology.hl7.org/ValueSet/v3-ProcessingMode
 */
export const ProcessingModeCode = {
  /**
   * Archive
   */
  A: "A",

  /**
   * Initial load
   */
  I: "I",

  /**
   * Restore from archive
   */
  R: "R",

  /**
   * Current processing
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcessingModeCode =
  typeof ProcessingModeCode[keyof typeof ProcessingModeCode];
