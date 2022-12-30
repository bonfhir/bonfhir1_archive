/**
 * Internet Assigned Numbers Authority (IANA) Mime Media Types
 * http://terminology.hl7.org/ValueSet/v3-MediaType
 */
export const MediaTypeCode = {
  /**
   * ApplicationMediaType
   */
  application: "application",

  /**
   * DICOM
   */
  "application/dicom": "application/dicom",

  /**
   * MSWORD
   */
  "application/msword": "application/msword",

  /**
   * PDF
   */
  "application/pdf": "application/pdf",

  /**
   * AudioMediaType
   */
  audio: "audio",

  /**
   * Basic Audio
   */
  "audio/basic": "audio/basic",

  /**
   * K32ADPCM Audio
   */
  "audio/k32adpcm": "audio/k32adpcm",

  /**
   * MPEG audio layer 3
   */
  "audio/mpeg": "audio/mpeg",

  /**
   * ImageMediaType
   */
  image: "image",

  /**
   * G3Fax Image
   */
  "image/g3fax": "image/g3fax",

  /**
   * GIF Image
   */
  "image/gif": "image/gif",

  /**
   * JPEG Image
   */
  "image/jpeg": "image/jpeg",

  /**
   * PNG Image
   */
  "image/png": "image/png",

  /**
   * TIFF Image
   */
  "image/tiff": "image/tiff",

  /**
   * ModelMediaType
   */
  model: "model",

  /**
   * VRML Model
   */
  "model/vrml": "model/vrml",

  /**
   * MultipartMediaType
   */
  multipart: "multipart",

  /**
   * CDA Level 1 Multipart
   */
  "multipart/x-hl7-cda-level-one": "multipart/x-hl7-cda-level-one",

  /**
   * CDA Level 1 Multipart
   */
  "multipart/x-hl7-cda-level1": "multipart/x-hl7-cda-level1",

  /**
   * TextMediaType
   */
  text: "text",

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

  /**
   * VideoMediaType
   */
  video: "video",

  /**
   * MP4 Video
   */
  "video/mp4": "video/mp4",

  /**
   * MPEG Video
   */
  "video/mpeg": "video/mpeg",

  /**
   * QuickTime Video
   */
  "video/quicktime": "video/quicktime",

  /**
   * WebM Video
   */
  "video/webm": "video/webm",

  /**
   * X-AVI Video
   */
  "video/x-avi": "video/x-avi",

  /**
   * Windows Media Video
   */
  "video/x-ms-wmv": "video/x-ms-wmv",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MediaTypeCode = typeof MediaTypeCode[keyof typeof MediaTypeCode];
