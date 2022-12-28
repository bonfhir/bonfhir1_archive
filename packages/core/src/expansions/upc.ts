/**
 * **Description:**Universal Product Code is one of a wide variety of bar code languages widely used in the United States and Canada for items in stores.
 * http://terminology.hl7.org/ValueSet/v3-UPC
 */
export const UPCCode = {
  /**
   * Universal Product Code
   */
  UPC: "UPC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UPCCode = typeof UPCCode[keyof typeof UPCCode];
