/**
 * For any text
 * http://terminology.hl7.org/ValueSet/v3-TextMediaType
 */
export const TextMediaTypeCode = {
  /**
   * HTML Text
   */
  "text/html": "text/html",

  /**
   * Plain Text
   */
  "text/plain": "text/plain",

  /**
   * RTF Text
   */
  "text/rtf": "text/rtf",

  /**
   * SGML Text
   */
  "text/sgml": "text/sgml",

  /**
   * HL7 Text
   */
  "text/x-hl7-ft": "text/x-hl7-ft",

  /**
   * HL7 Structured Narrative
   */
  "text/x-hl7-text+xml": "text/x-hl7-text+xml",

  /**
   * XML Text
   */
  "text/xml": "text/xml",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TextMediaTypeCode =
  typeof TextMediaTypeCode[keyof typeof TextMediaTypeCode];
