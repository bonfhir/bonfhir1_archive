/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Yaqui
 */
export const YaquiCode = {
  /**
   * Yaqui
   */
  "1711-1": "1711-1",

  /**
   * Barrio Libre
   */
  "1712-9": "1712-9",

  /**
   * Pascua Yaqui
   */
  "1713-7": "1713-7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YaquiCode = typeof YaquiCode[keyof typeof YaquiCode];
