/**
 * Defines list rendering characteristics
 * http://terminology.hl7.org/ValueSet/v3-ListStyle
 */
export const ListStyleCode = {
  /**
   * List Style
   */
  ListStyle: "_ListStyle",

  /**
   * Ordered List Style
   */
  OrderedListStyle: "_OrderedListStyle",

  /**
   * Arabic
   */
  Arabic: "Arabic",

  /**
   * Big Alpha
   */
  BigAlpha: "BigAlpha",

  /**
   * Big Alpha
   */
  BigAlpha: "BIG.ALPHA",

  /**
   * Big Roman
   */
  BigRoman: "BigRoman",

  /**
   * Big Roman
   */
  BigRoman: "BIG.ROMAN",

  /**
   * Little Alpha
   */
  LittleAlpha: "LittleAlpha",

  /**
   * Little Alpha
   */
  LittleAlpha: "LITTLE.ALPHA",

  /**
   * Little Roman
   */
  LittleRoman: "LittleRoman",

  /**
   * Little Roman
   */
  LittleRoman: "LITTLE.ROMAN",

  /**
   * Unordered List Style
   */
  UnorderedListStyle: "_UnorderedListStyle",

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
export type ListStyleCode = typeof ListStyleCode[keyof typeof ListStyleCode];
