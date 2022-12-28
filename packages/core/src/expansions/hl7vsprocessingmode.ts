/**
 * Concepts that indicate an archival process or an initial load process.
 * http://terminology.hl7.org/ValueSet/v2-0207
 */
export const Hl7VSProcessingModeCode = {
  /**
   * Archive
   */
  A: "A",

  /**
   * Restore from archive
   */
  R: "R",

  /**
   * Initial load
   */
  I: "I",

  /**
   * Current processing, transmitted at intervals (scheduled or on demand)
   */
  T: "T",

  /**
   * Not present (the default, meaning current  processing)
   */
  "Not present": "Not present",

  /**
   * Not present (the default, meaning current  processing)
   */
  "not present": "not present",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcessingModeCode =
  typeof Hl7VSProcessingModeCode[keyof typeof Hl7VSProcessingModeCode];
