/**
 * Video media type.
 * http://terminology.hl7.org/ValueSet/v3-VideoMediaType
 */
export const VideoMediaTypeCode = {
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
export type VideoMediaTypeCode =
  typeof VideoMediaTypeCode[keyof typeof VideoMediaTypeCode];
