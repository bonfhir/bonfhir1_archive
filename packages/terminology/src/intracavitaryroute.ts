/**
 * Intracavitary
 * http://terminology.hl7.org/ValueSet/v3-IntracavitaryRoute
 */
export const IntracavitaryRouteCode = {
  /**
   * Injection, intracavitary
   */
  ICAVITINJ: "ICAVITINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracavitaryRouteCode =
  typeof IntracavitaryRouteCode[keyof typeof IntracavitaryRouteCode];
