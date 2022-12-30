/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SouthernCaddoan
 */
export const SouthernCaddoanCode = {
  /**
   * Caddo
   */
  "x-CAD": "x-CAD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SouthernCaddoanCode =
  typeof SouthernCaddoanCode[keyof typeof SouthernCaddoanCode];
