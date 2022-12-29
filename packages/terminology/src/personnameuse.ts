/**
 * A code indicating the type of name (e.g. nickname, alias, maiden name, legal, adopted)
 * http://terminology.hl7.org/ValueSet/v3-PersonNameUse
 */
export const PersonNameUseCode = {
  /**
   * Alphabetic
   */
  Alphabetic: "ABC",

  /**
   * Ideographic
   */
  Ideographic: "IDE",

  /**
   * Syllabic
   */
  Syllabic: "SYL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PersonNameUseCode =
  typeof PersonNameUseCode[keyof typeof PersonNameUseCode];
