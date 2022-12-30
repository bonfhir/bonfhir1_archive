/**
 * Concepts declaring the general type of media data that is encoded.
 * http://terminology.hl7.org/ValueSet/v2-0191
 */
export const Hl7VSTypeOfDataCode = {
  /**
   * Other application data, typically uninterpreted binary data (HL7 V2.3 and later)
   */
  AP: "AP",

  /**
   * Audio data (HL7 V2.3 and later)
   */
  AU: "AU",

  /**
   * Formatted text (HL7 V2.2 only)
   */
  FT: "FT",

  /**
   * Image data (HL7 V2.3 and later)
   */
  IM: "IM",

  /**
   * MIME multipart package
   */
  multipart: "multipart",

  /**
   * Non-scanned image (HL7 V2.2 only)
   */
  NS: "NS",

  /**
   * Scanned document (HL7 V2.2 only)
   */
  SD: "SD",

  /**
   * Scanned image (HL7 V2.2 only)
   */
  SI: "SI",

  /**
   * Image data  (HL7 V2.3 and later)
   */
  Image: "Image",

  /**
   * Machine readable text document (HL7 V2.3.1 and later)
   */
  TEXT: "TEXT",

  /**
   * Audio data  (HL7 V2.3 and later)
   */
  Audio: "Audio",

  /**
   * Machine readable text document (HL7 V2.2 only)
   */
  TX: "TX",

  /**
   * Other application data, typically uninterpreted binary data  (HL7 V2.3 and later)
   */
  Application: "Application",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTypeOfDataCode =
  typeof Hl7VSTypeOfDataCode[keyof typeof Hl7VSTypeOfDataCode];
