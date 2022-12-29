/**
 * Image media type.
 * http://terminology.hl7.org/ValueSet/v3-ImageMediaType
 */
export const ImageMediaTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImageMediaTypeCode =
  typeof ImageMediaTypeCode[keyof typeof ImageMediaTypeCode];
