/**
 * Intratubular
 * http://terminology.hl7.org/ValueSet/v3-IntratubularRoute
 */
export const IntratubularRouteCode = {
  /**
   * Injection, intratubular
   */
  Injectionintratubular: "ITUBINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntratubularRouteCode =
  typeof IntratubularRouteCode[keyof typeof IntratubularRouteCode];
