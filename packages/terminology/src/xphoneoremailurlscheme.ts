/**
 * Restricts scheme to e-mail or phone numbers at which a human can be reached
 * http://terminology.hl7.org/ValueSet/v3-xPhoneOrEmailURLScheme
 */
export const XPhoneOrEmailURLSchemeCode = {
  /**
   * Fax
   */
  fax: "fax",

  /**
   * Mailto
   */
  mailto: "mailto",

  /**
   * Telephone
   */
  tel: "tel",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XPhoneOrEmailURLSchemeCode =
  typeof XPhoneOrEmailURLSchemeCode[keyof typeof XPhoneOrEmailURLSchemeCode];
