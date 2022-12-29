/**
 * This attribute defines whether the message is being sent in current processing, archive mode, initial load mode, restore from archive mode, etc.
 * http://terminology.hl7.org/ValueSet/v3-ProcessingMode
 */
export const ProcessingModeCode = {
  /**
   * Archive
   */
  Archive: "A",

  /**
   * Initial load
   */
  Initialload: "I",

  /**
   * Restore from archive
   */
  Restorefromarchive: "R",

  /**
   * Current processing
   */
  Currentprocessing: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcessingModeCode =
  typeof ProcessingModeCode[keyof typeof ProcessingModeCode];
