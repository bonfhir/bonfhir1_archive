/**
 * A subset of the IANA media subtypes of binary data that are encoded in an ascii structure or stream.
 * http://terminology.hl7.org/ValueSet/v2-notAllCodes-0291
 */
export const Hl7VSSubtypeOfReferencedDataCode = {
  /**
   * ISDN PCM audio data
   */
  ISDNPCMaudiodata: "BASIC",

  /**
   * Source RFC 2046
   */
  SourceRFC2046: "…",

  /**
   * Digital Imaging and Communications in Medicine
   */
  DigitalImagingandCommunicationsinMedicine: "DICOM",

  /**
   * Facsimile data
   */
  Facsimiledata: "FAX",

  /**
   * Graphics Interchange Format
   */
  GraphicsInterchangeFormat: "GIF",

  /**
   * Hypertext Markup Language
   */
  HypertextMarkupLanguage: "HTML",

  /**
   * Electronic ink data (Jot 1.0 standard)
   */
  ElectronicinkdataJot10standard: "JOT",

  /**
   * Joint Photographic Experts Group
   */
  JointPhotographicExpertsGroup: "JPEG",

  /**
   * Uninterpreted binary data
   */
  Uninterpretedbinarydata: "Octet-stream",

  /**
   * PICT format image data
   */
  PICTformatimagedata: "PICT",

  /**
   * PostScript program
   */
  PostScriptprogram: "PostScript",

  /**
   * Rich Text Format
   */
  RichTextFormat: "RTF",

  /**
   * Standard Generalized Markup Language (HL7 V2.3.1 and later)
   */
  StandardGeneralizedMarkupLanguageHL7V231andlater: "SGML",

  /**
   * TIFF image data
   */
  TIFFimagedata: "TIFF",

  /**
   * Extensible Markup Language (HL7 V2.3.1 and later)
   */
  ExtensibleMarkupLanguageHL7V231andlater: "XML",

  /**
   * HL7 Clinical Document Architecture Level One document
   */
  HL7ClinicalDocumentArchitectureLevelOnedocument: "x-hl7-cda-level-one",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSubtypeOfReferencedDataCode =
  typeof Hl7VSSubtypeOfReferencedDataCode[keyof typeof Hl7VSSubtypeOfReferencedDataCode];
