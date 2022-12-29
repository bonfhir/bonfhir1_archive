/**
 * Value Set of codes specifying the general type of data.
 * http://terminology.hl7.org/ValueSet/v2-notAllCodes-0834
 */
export const Hl7VSMimeTypesCode = {
  /**
   * Application data
   */
  Applicationdata: "application",

  /**
   * Audio data
   */
  Audiodata: "audio",

  /**
   * Image data
   */
  Imagedata: "image",

  /**
   * Model data
   */
  Modeldata: "model",

  /**
   * Text data
   */
  Textdata: "text",

  /**
   * Video data
   */
  Videodata: "video",

  /**
   * MIME multipart package
   */
  MIMEmultipartpackage: "multipart",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMimeTypesCode =
  typeof Hl7VSMimeTypesCode[keyof typeof Hl7VSMimeTypesCode];
