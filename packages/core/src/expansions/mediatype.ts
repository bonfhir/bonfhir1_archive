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
   * AudioMediaType
   */
  audio: "audio",

  /**
   * ImageMediaType
   */
  image: "image",

  /**
   * ModelMediaType
   */
  model: "model",

  /**
   * MultipartMediaType
   */
  multipart: "multipart",

  /**
   * TextMediaType
   */
  text: "text",

  /**
   * VideoMediaType
   */
  video: "video",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MediaTypeCode = typeof MediaTypeCode[keyof typeof MediaTypeCode];
