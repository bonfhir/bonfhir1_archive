/**
 * Value Set of codes specifying the reason this contact number/email was marked as "ended".
 * http://terminology.hl7.org/ValueSet/v2-0868
 */
export const Hl7VSTelecommunicationExpirationReasonCode = {
  /**
   * Moved
   */
  M: "M",

  /**
   * Added in error
   */
  E: "E",

  /**
   * On request
   */
  R: "R",

  /**
   * Corrected
   */
  C: "C",

  /**
   * No longer in service
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTelecommunicationExpirationReasonCode =
  typeof Hl7VSTelecommunicationExpirationReasonCode[keyof typeof Hl7VSTelecommunicationExpirationReasonCode];
