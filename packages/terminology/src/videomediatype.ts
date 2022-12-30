/**
 * Video media type.
 * http://terminology.hl7.org/ValueSet/v3-VideoMediaType
 */
export const VideoMediaTypeCode = {
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
export type VideoMediaTypeCode =
  typeof VideoMediaTypeCode[keyof typeof VideoMediaTypeCode];
