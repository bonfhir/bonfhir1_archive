/**
 * Enteral
 * http://terminology.hl7.org/ValueSet/v3-EnteralRoute
 */
export const EnteralRouteCode = {
  /**
   * Instillation, enteral feeding tube
   */
  EFT: "EFT",

  /**
   * Instillation, enteral
   */
  ENTINSTL: "ENTINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EnteralRouteCode =
  typeof EnteralRouteCode[keyof typeof EnteralRouteCode];
