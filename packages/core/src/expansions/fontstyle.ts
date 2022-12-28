/**
 * (abstract) Defines font rendering characteristics
 * http://terminology.hl7.org/ValueSet/v3-FontStyle
 */
export const FontStyleCode = {
  /**
   * Font Style
   */
  _FontStyle: "_FontStyle",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FontStyleCode = typeof FontStyleCode[keyof typeof FontStyleCode];
