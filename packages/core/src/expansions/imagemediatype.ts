/**
 * Image media type.
 * http://terminology.hl7.org/ValueSet/v3-ImageMediaType
 */
export const ImageMediaTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImageMediaTypeCode =
  typeof ImageMediaTypeCode[keyof typeof ImageMediaTypeCode];
