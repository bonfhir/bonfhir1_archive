/**
 * Intracaudal
 * http://terminology.hl7.org/ValueSet/v3-IntracaudalRoute
 */
export const IntracaudalRouteCode = {
  /**
   * Injection, intracaudal
   */
  ICAUDINJ: "ICAUDINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracaudalRouteCode =
  typeof IntracaudalRouteCode[keyof typeof IntracaudalRouteCode];
