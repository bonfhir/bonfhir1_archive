/**
 * Defines rendering characteristics for ordered lists
 * http://terminology.hl7.org/ValueSet/v3-OrderedListStyle
 */
export const OrderedListStyleCode = {
  /**
   * Ordered List Style
   */
  _OrderedListStyle: "_OrderedListStyle",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OrderedListStyleCode =
  typeof OrderedListStyleCode[keyof typeof OrderedListStyleCode];
