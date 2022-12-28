/**
 * Tells a receiver to ignore just the local markup tags (local\_markup, local\_header, local\_attr) when value="markup", or to ignore the local markup tags and all contained content when value="all"
 * http://terminology.hl7.org/ValueSet/v3-LocalMarkupIgnore
 */
export const LocalMarkupIgnoreCode = {
  /**
   * all
   */
  all: "all",

  /**
   * markup
   */
  markup: "markup",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LocalMarkupIgnoreCode =
  typeof LocalMarkupIgnoreCode[keyof typeof LocalMarkupIgnoreCode];
