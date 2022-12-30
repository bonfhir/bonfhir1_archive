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

  /**
   * Unsupported interaction
   */
  NS200: "NS200",

  /**
   * Unsupported processing id
   */
  NS202: "NS202",

  /**
   * Unsupported version id
   */
  NS203: "NS203",

  /**
   * Unsupported processing Mode
   */
  NS250: "NS250",

  /**
   * Unknown sender
   */
  NS260: "NS260",

  /**
   * Unrecognized attentionline
   */
  NS261: "NS261",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementDetailNotSupportedCodeCode =
  typeof AcknowledgementDetailNotSupportedCodeCode[keyof typeof AcknowledgementDetailNotSupportedCodeCode];
