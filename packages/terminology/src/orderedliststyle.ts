/**
 * Defines rendering characteristics for ordered lists
 * http://terminology.hl7.org/ValueSet/v3-OrderedListStyle
 */
export const OrderedListStyleCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrderedListStyleCode =
  typeof OrderedListStyleCode[keyof typeof OrderedListStyleCode];
