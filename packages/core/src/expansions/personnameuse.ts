/**
 * A code indicating the type of name (e.g. nickname, alias, maiden name, legal, adopted)
 * http://terminology.hl7.org/ValueSet/v3-PersonNameUse
 */
export const PersonNameUseCode = {
  /**
   * Alphabetic
   */
  ABC: "ABC",

  /**
   * Ideographic
   */
  IDE: "IDE",

  /**
   * Syllabic
   */
  SYL: "SYL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PersonNameUseCode =
  typeof PersonNameUseCode[keyof typeof PersonNameUseCode];
