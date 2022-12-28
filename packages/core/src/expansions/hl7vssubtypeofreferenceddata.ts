/**
 * A subset of the IANA media subtypes of binary data that are encoded in an ascii structure or stream.
 * http://terminology.hl7.org/ValueSet/v2-notAllCodes-0291
 */
export const Hl7VSSubtypeOfReferencedDataCode = {
  /**
   * ISDN PCM audio data
   */
  BASIC: "BASIC",

  /**
   * Source RFC 2046
   */
  "…": "…",

  /**
   * Digital Imaging and Communications in Medicine
   */
  DICOM: "DICOM",

  /**
   * Facsimile data
   */
  FAX: "FAX",

  /**
   * Graphics Interchange Format
   */
  GIF: "GIF",

  /**
   * Hypertext Markup Language
   */
  HTML: "HTML",

  /**
   * Electronic ink data (Jot 1.0 standard)
   */
  JOT: "JOT",

  /**
   * Joint Photographic Experts Group
   */
  JPEG: "JPEG",

  /**
   * Uninterpreted binary data
   */
  "Octet-stream": "Octet-stream",

  /**
   * PICT format image data
   */
  PICT: "PICT",

  /**
   * PostScript program
   */
  PostScript: "PostScript",

  /**
   * Rich Text Format
   */
  RTF: "RTF",

  /**
   * Standard Generalized Markup Language (HL7 V2.3.1 and later)
   */
  SGML: "SGML",

  /**
   * TIFF image data
   */
  TIFF: "TIFF",

  /**
   * Extensible Markup Language (HL7 V2.3.1 and later)
   */
  XML: "XML",

  /**
   * HL7 Clinical Document Architecture Level One document
   */
  "x-hl7-cda-level-one": "x-hl7-cda-level-one",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSubtypeOfReferencedDataCode =
  typeof Hl7VSSubtypeOfReferencedDataCode[keyof typeof Hl7VSSubtypeOfReferencedDataCode];
