/**
 * Intrabursal
 * http://terminology.hl7.org/ValueSet/v3-IntrabursalRoute
 */
export const IntrabursalRouteCode = {
  /**
   * Injection, intrabursal
   */
  IBURSINJ: "IBURSINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrabursalRouteCode =
  typeof IntrabursalRouteCode[keyof typeof IntrabursalRouteCode];
