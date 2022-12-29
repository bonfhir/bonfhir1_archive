/**
 * Defines rendering characteristics for ordered lists
 * http://terminology.hl7.org/ValueSet/v3-OrderedListStyle
 */
export const OrderedListStyleCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrderedListStyleCode =
  typeof OrderedListStyleCode[keyof typeof OrderedListStyleCode];
