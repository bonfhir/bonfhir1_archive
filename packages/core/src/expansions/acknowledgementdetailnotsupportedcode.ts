/**
 * Refelects rejections because elements of the communication are not supported in the current context.
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementDetailNotSupportedCode
 */
export const AcknowledgementDetailNotSupportedCodeCode = {
  /**
   * AcknowledgementDetailNotSupportedCode
   */
  _AcknowledgementDetailNotSupportedCode:
    "_AcknowledgementDetailNotSupportedCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementDetailNotSupportedCodeCode =
  typeof AcknowledgementDetailNotSupportedCodeCode[keyof typeof AcknowledgementDetailNotSupportedCodeCode];
