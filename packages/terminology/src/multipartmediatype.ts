/**
 * Multipart Media Type
 * http://terminology.hl7.org/ValueSet/v3-MultipartMediaType
 */
export const MultipartMediaTypeCode = {
  /**
   * CDA Level 1 Multipart
   */
  "multipart/x-hl7-cda-level-one": "multipart/x-hl7-cda-level-one",

  /**
   * CDA Level 1 Multipart
   */
  "multipart/x-hl7-cda-level1": "multipart/x-hl7-cda-level1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MultipartMediaTypeCode =
  typeof MultipartMediaTypeCode[keyof typeof MultipartMediaTypeCode];
