/**
 * Value Set of codes specifying the reason this contact number/email was marked as "ended".
 * http://terminology.hl7.org/ValueSet/v2-0868
 */
export const Hl7VSTelecommunicationExpirationReasonCode = {
  /**
   * Moved
   */
  Moved: "M",

  /**
   * Added in error
   */
  Addedinerror: "E",

  /**
   * On request
   */
  Onrequest: "R",

  /**
   * Corrected
   */
  Corrected: "C",

  /**
   * No longer in service
   */
  Nolongerinservice: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTelecommunicationExpirationReasonCode =
  typeof Hl7VSTelecommunicationExpirationReasonCode[keyof typeof Hl7VSTelecommunicationExpirationReasonCode];
