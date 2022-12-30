/**
 * Concepts which specify a response type used in deferred processing two phase reply for delayed acknowldgement mode of the original acknowledgement mechanism defined in HL7 Version 2.x messaging.
 * http://terminology.hl7.org/ValueSet/v2-0102
 */
export const Hl7VSDelayedAcknowledgmentTypeCode = {
  /**
   * Message received, stored for later processing
   */
  D: "D",

  /**
   * acknowledgment after processing
   */
  F: "F",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDelayedAcknowledgmentTypeCode =
  typeof Hl7VSDelayedAcknowledgmentTypeCode[keyof typeof Hl7VSDelayedAcknowledgmentTypeCode];
