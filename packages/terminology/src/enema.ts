/**
 * Enema
 * http://terminology.hl7.org/ValueSet/v3-Enema
 */
export const EnemaCode = {
  /**
   * Enema, rectal
   */
  ENEMA: "ENEMA",

  /**
   * Enema, rectal retention
   */
  RETENEMA: "RETENEMA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EnemaCode = typeof EnemaCode[keyof typeof EnemaCode];
