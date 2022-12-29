/**
 * Intravitreal
 * http://terminology.hl7.org/ValueSet/v3-IntravitrealRoute
 */
export const IntravitrealRouteCode = {
  /**
   * Injection, intravitreal
   */
  Injectionintravitreal: "IVITINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravitrealRouteCode =
  typeof IntravitrealRouteCode[keyof typeof IntravitrealRouteCode];
