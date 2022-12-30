/**
 * (abstract) Defines font rendering characteristics
 * http://terminology.hl7.org/ValueSet/v3-FontStyle
 */
export const FontStyleCode = {
  /**
   * Font Style
   */
  _FontStyle: "_FontStyle",

  /**
   * Bold Font
   */
  bold: "bold",

  /**
   * Emphasised Font
   */
  emphasis: "emphasis",

  /**
   * Italics Font
   */
  italics: "italics",

  /**
   * Underline Font
   */
  underline: "underline",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FontStyleCode = typeof FontStyleCode[keyof typeof FontStyleCode];
