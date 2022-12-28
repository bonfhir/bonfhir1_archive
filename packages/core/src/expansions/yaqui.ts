/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Yaqui
 */
export const YaquiCode = {
  /**
   * Yaqui
   */
  "1711-1": "1711-1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YaquiCode = typeof YaquiCode[keyof typeof YaquiCode];
