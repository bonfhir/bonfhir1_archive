/**
 * Defines rendering characteristics for unordered lists
 * http://terminology.hl7.org/ValueSet/v3-UnorderedListStyle
 */
export const UnorderedListStyleCode = {
  /**
   * Unordered List Style
   */
  _UnorderedListStyle: "_UnorderedListStyle",

  /**
   * Circle
   */
  Circle: "Circle",

  /**
   * Disc
   */
  Disc: "Disc",

  /**
   * Square
   */
  Square: "Square",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UnorderedListStyleCode =
  typeof UnorderedListStyleCode[keyof typeof UnorderedListStyleCode];
