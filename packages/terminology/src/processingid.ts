/**
 * This attribute defines whether the message is part of a production, training, or debugging system.
 * http://terminology.hl7.org/ValueSet/v3-ProcessingID
 */
export const ProcessingIDCode = {
  /**
   * Debugging
   */
  Debugging: "D",

  /**
   * Production
   */
  Production: "P",

  /**
   * Training
   */
  Training: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcessingIDCode =
  typeof ProcessingIDCode[keyof typeof ProcessingIDCode];
