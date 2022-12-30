/**
 * Application specific media type.
 * http://terminology.hl7.org/ValueSet/v3-ApplicationMediaType
 */
export const ApplicationMediaTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ApplicationMediaTypeCode =
  typeof ApplicationMediaTypeCode[keyof typeof ApplicationMediaTypeCode];
