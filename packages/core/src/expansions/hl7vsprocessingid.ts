/**
 * Value Set of codes that specify whether the message is part of a production, training or debugging system.
 * http://terminology.hl7.org/ValueSet/v2-0103
 */
export const Hl7VSProcessingIdCode = {
  /**
   * Debugging
   */
  D: "D",

  /**
   * Production
   */
  P: "P",

  /**
   * Training
   */
  T: "T",

  /**
   * Non-Production Testing
   */
  N: "N",

  /**
   * Validation
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcessingIdCode =
  typeof Hl7VSProcessingIdCode[keyof typeof Hl7VSProcessingIdCode];
