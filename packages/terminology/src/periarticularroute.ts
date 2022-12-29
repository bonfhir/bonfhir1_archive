/**
 * Periarticular
 * http://terminology.hl7.org/ValueSet/v3-PeriarticularRoute
 */
export const PeriarticularRouteCode = {
  /**
   * Injection, periarticular
   */
  Injectionperiarticular: "PAINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PeriarticularRouteCode =
  typeof PeriarticularRouteCode[keyof typeof PeriarticularRouteCode];
