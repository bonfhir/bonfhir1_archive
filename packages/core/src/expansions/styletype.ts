/**
 * (abstract) Used within an instance to give the author some control over various aspects of rendering
 * http://terminology.hl7.org/ValueSet/v3-StyleType
 */
export const StyleTypeCode = {
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

  /**
   * Bottom Rule
   */
  Botrule: "Botrule",

  /**
   * Left-sided rule
   */
  Lrule: "Lrule",

  /**
   * Right-sided rule
   */
  Rrule: "Rrule",

  /**
   * Top Rule
   */
  Toprule: "Toprule",

  /**
   * Top Rule
   */
  TORULE: "TORULE",

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
export type StyleTypeCode = typeof StyleTypeCode[keyof typeof StyleTypeCode];
