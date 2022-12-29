/**
 * (abstract) Used within an instance to give the author some control over various aspects of rendering
 * http://terminology.hl7.org/ValueSet/v3-StyleType
 */
export const StyleTypeCode = {
  /**
   * Bold Font
   */
  BoldFont: "bold",

  /**
   * Emphasised Font
   */
  EmphasisedFont: "emphasis",

  /**
   * Italics Font
   */
  ItalicsFont: "italics",

  /**
   * Underline Font
   */
  UnderlineFont: "underline",

  /**
   * Bottom Rule
   */
  BottomRule: "Botrule",

  /**
   * Left-sided rule
   */
  Leftsidedrule: "Lrule",

  /**
   * Right-sided rule
   */
  Rightsidedrule: "Rrule",

  /**
   * Top Rule
   */
  TopRule: "Toprule",

  /**
   * Top Rule
   */
  TopRule: "TORULE",

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
export type StyleTypeCode = typeof StyleTypeCode[keyof typeof StyleTypeCode];
