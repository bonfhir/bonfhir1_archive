/**
 * Internet Assigned Numbers Authority (IANA) Mime Media Types
 * http://terminology.hl7.org/ValueSet/v3-MediaType
 */
export const MediaTypeCode = {
  /**
   * ApplicationMediaType
   */
  ApplicationMediaType: "application",

  /**
   * DICOM
   */
  DICOM: "application/dicom",

  /**
   * MSWORD
   */
  MSWORD: "application/msword",

  /**
   * PDF
   */
  PDF: "application/pdf",

  /**
   * AudioMediaType
   */
  AudioMediaType: "audio",

  /**
   * Basic Audio
   */
  BasicAudio: "audio/basic",

  /**
   * K32ADPCM Audio
   */
  K32ADPCMAudio: "audio/k32adpcm",

  /**
   * MPEG audio layer 3
   */
  MPEGaudiolayer3: "audio/mpeg",

  /**
   * ImageMediaType
   */
  ImageMediaType: "image",

  /**
   * G3Fax Image
   */
  G3FaxImage: "image/g3fax",

  /**
   * GIF Image
   */
  GIFImage: "image/gif",

  /**
   * JPEG Image
   */
  JPEGImage: "image/jpeg",

  /**
   * PNG Image
   */
  PNGImage: "image/png",

  /**
   * TIFF Image
   */
  TIFFImage: "image/tiff",

  /**
   * ModelMediaType
   */
  ModelMediaType: "model",

  /**
   * VRML Model
   */
  VRMLModel: "model/vrml",

  /**
   * MultipartMediaType
   */
  MultipartMediaType: "multipart",

  /**
   * CDA Level 1 Multipart
   */
  CDALevel1Multipart: "multipart/x-hl7-cda-level-one",

  /**
   * CDA Level 1 Multipart
   */
  CDALevel1Multipart: "multipart/x-hl7-cda-level1",

  /**
   * TextMediaType
   */
  TextMediaType: "text",

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

  /**
   * VideoMediaType
   */
  VideoMediaType: "video",

  /**
   * MP4 Video
   */
  MP4Video: "video/mp4",

  /**
   * MPEG Video
   */
  MPEGVideo: "video/mpeg",

  /**
   * QuickTime Video
   */
  QuickTimeVideo: "video/quicktime",

  /**
   * WebM Video
   */
  WebMVideo: "video/webm",

  /**
   * X-AVI Video
   */
  XAVIVideo: "video/x-avi",

  /**
   * Windows Media Video
   */
  WindowsMediaVideo: "video/x-ms-wmv",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MediaTypeCode = typeof MediaTypeCode[keyof typeof MediaTypeCode];
