/**
 * **Description:**Global Trade Item Number is an identifier for trade items developed by GS1 (comprising the former EAN International and Uniform Code Council).
 * http://terminology.hl7.org/ValueSet/v3-GTIN
 */
export const GTINCode = {
  /**
   * Global Trade Item Number
   */
  GlobalTradeItemNumber: "GTIN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GTINCode = typeof GTINCode[keyof typeof GTINCode];
