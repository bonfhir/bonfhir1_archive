/**
 * Defines list rendering characteristics
 * http://terminology.hl7.org/ValueSet/v3-ListStyle
 */
export const ListStyleCode = {
  /**
   * List Style
   */
  _ListStyle: "_ListStyle",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ListStyleCode = typeof ListStyleCode[keyof typeof ListStyleCode];
