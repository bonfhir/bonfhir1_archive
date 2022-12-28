/**
 * **Description:**Identifies the order in which content should be processed.
 * http://terminology.hl7.org/ValueSet/v3-ContentProcessingMode
 */
export const ContentProcessingModeCode = {
  /**
   * Sequential
   */
  SEQL: "SEQL",

  /**
   * Unordered
   */
  UNOR: "UNOR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContentProcessingModeCode =
  typeof ContentProcessingModeCode[keyof typeof ContentProcessingModeCode];
