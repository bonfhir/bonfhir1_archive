/**
 * Restricts scheme to phone numbers at which a human can be reached
 * http://terminology.hl7.org/ValueSet/v3-xPhoneURLScheme
 */
export const XPhoneURLSchemeCode = {
  /**
   * Fax
   */
  fax: "fax",

  /**
   * Telephone
   */
  tel: "tel",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XPhoneURLSchemeCode =
  typeof XPhoneURLSchemeCode[keyof typeof XPhoneURLSchemeCode];
