/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Yokuts
 */
export const YokutsCode = {
  /**
   * Yokuts
   */
  "1717-8": "1717-8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YokutsCode = typeof YokutsCode[keyof typeof YokutsCode];
