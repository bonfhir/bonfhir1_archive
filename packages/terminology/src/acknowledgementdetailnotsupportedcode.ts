/**
 * Refelects rejections because elements of the communication are not supported in the current context.
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementDetailNotSupportedCode
 */
export const AcknowledgementDetailNotSupportedCodeCode = {
  /**
   * AcknowledgementDetailNotSupportedCode
   */
  AcknowledgementDetailNotSupportedCode:
    "_AcknowledgementDetailNotSupportedCode",

  /**
   * Unsupported interaction
   */
  Unsupportedinteraction: "NS200",

  /**
   * Unsupported processing id
   */
  Unsupportedprocessingid: "NS202",

  /**
   * Unsupported version id
   */
  Unsupportedversionid: "NS203",

  /**
   * Unsupported processing Mode
   */
  UnsupportedprocessingMode: "NS250",

  /**
   * Unknown sender
   */
  Unknownsender: "NS260",

  /**
   * Unrecognized attentionline
   */
  Unrecognizedattentionline: "NS261",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementDetailNotSupportedCodeCode =
  typeof AcknowledgementDetailNotSupportedCodeCode[keyof typeof AcknowledgementDetailNotSupportedCodeCode];
