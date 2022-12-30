/**
 * Intrapulmonary
 * http://terminology.hl7.org/ValueSet/v3-IntrapulmonaryRoute
 */
export const IntrapulmonaryRouteCode = {
  /**
   * Injection, extracorporeal
   */
  EXTCORPINJ: "EXTCORPINJ",

  /**
   * Injection, intrapulmonary
   */
  IPINJ: "IPINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrapulmonaryRouteCode =
  typeof IntrapulmonaryRouteCode[keyof typeof IntrapulmonaryRouteCode];
