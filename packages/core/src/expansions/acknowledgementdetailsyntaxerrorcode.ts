/**
 * Reflects errors in the syntax or structure of the communication.
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementDetailSyntaxErrorCode
 */
export const AcknowledgementDetailSyntaxErrorCodeCode = {
  /**
   * Syntax error
   */
  SYN: "SYN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementDetailSyntaxErrorCodeCode =
  typeof AcknowledgementDetailSyntaxErrorCodeCode[keyof typeof AcknowledgementDetailSyntaxErrorCodeCode];
