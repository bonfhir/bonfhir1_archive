/**
 * A code identifying the specific message to be provided.

A textual value may be specified as the print name, or for non-coded messages, as the original text.*Discussion:*

'Required attribute xxx is missing', 'System will be unavailable March 19 from 0100 to 0300'*Examples:*
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementDetailType
 */
export const AcknowledgementDetailTypeCode = {
  /**
   * Error
   */
  Error: "E",

  /**
   * Information
   */
  Information: "I",

  /**
   * Warning
   */
  Warning: "W",

  /**
   *
   */
  ERR: "ERR",

  /**
   *
   */
  INFO: "INFO",

  /**
   *
   */
  WARN: "WARN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementDetailTypeCode =
  typeof AcknowledgementDetailTypeCode[keyof typeof AcknowledgementDetailTypeCode];
