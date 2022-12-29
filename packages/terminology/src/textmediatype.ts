/**
 * For any text
 * http://terminology.hl7.org/ValueSet/v3-TextMediaType
 */
export const TextMediaTypeCode = {
  /**
   * HTML Text
   */
  HTMLText: "text/html",

  /**
   * Plain Text
   */
  PlainText: "text/plain",

  /**
   * RTF Text
   */
  RTFText: "text/rtf",

  /**
   * SGML Text
   */
  SGMLText: "text/sgml",

  /**
   * HL7 Text
   */
  HL7Text: "text/x-hl7-ft",

  /**
   * HL7 Structured Narrative
   */
  HL7StructuredNarrative: "text/x-hl7-text+xml",

  /**
   * XML Text
   */
  XMLText: "text/xml",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TextMediaTypeCode =
  typeof TextMediaTypeCode[keyof typeof TextMediaTypeCode];
