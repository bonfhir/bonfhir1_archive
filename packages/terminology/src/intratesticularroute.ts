/**
 * Intratesticular
 * http://terminology.hl7.org/ValueSet/v3-IntratesticularRoute
 */
export const IntratesticularRouteCode = {
  /**
   * Injection, intratesticular
   */
  Injectionintratesticular: "ITESTINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntratesticularRouteCode =
  typeof IntratesticularRouteCode[keyof typeof IntratesticularRouteCode];
