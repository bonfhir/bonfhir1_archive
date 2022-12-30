/**
 * Defines list rendering characteristics
 * http://terminology.hl7.org/ValueSet/v3-ListStyle
 */
export const ListStyleCode = {
  /**
   * List Style
   */
  _ListStyle: "_ListStyle",

  /**
   * Ordered List Style
   */
  _OrderedListStyle: "_OrderedListStyle",

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
  "BIG.ALPHA": "BIG.ALPHA",

  /**
   * Big Roman
   */
  BigRoman: "BigRoman",

  /**
   * Big Roman
   */
  "BIG.ROMAN": "BIG.ROMAN",

  /**
   * Little Alpha
   */
  LittleAlpha: "LittleAlpha",

  /**
   * Little Alpha
   */
  "LITTLE.ALPHA": "LITTLE.ALPHA",

  /**
   * Little Roman
   */
  LittleRoman: "LittleRoman",

  /**
   * Little Roman
   */
  "LITTLE.ROMAN": "LITTLE.ROMAN",

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
export type ListStyleCode = typeof ListStyleCode[keyof typeof ListStyleCode];
