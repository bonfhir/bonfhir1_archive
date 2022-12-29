/**
 * Transplacental
 * http://terminology.hl7.org/ValueSet/v3-TransplacentalRoute
 */
export const TransplacentalRouteCode = {
  /**
   * Injection, transplacental
   */
  Injectiontransplacental: "TRPLACINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TransplacentalRouteCode =
  typeof TransplacentalRouteCode[keyof typeof TransplacentalRouteCode];
