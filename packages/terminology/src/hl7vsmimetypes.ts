/**
 * Value Set of codes specifying the general type of data.
 * http://terminology.hl7.org/ValueSet/v2-notAllCodes-0834
 */
export const Hl7VSMimeTypesCode = {
  /**
   * Application data
   */
  application: "application",

  /**
   * Audio data
   */
  audio: "audio",

  /**
   * Image data
   */
  image: "image",

  /**
   * Model data
   */
  model: "model",

  /**
   * Text data
   */
  text: "text",

  /**
   * Video data
   */
  video: "video",

  /**
   * MIME multipart package
   */
  multipart: "multipart",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMimeTypesCode =
  typeof Hl7VSMimeTypesCode[keyof typeof Hl7VSMimeTypesCode];
