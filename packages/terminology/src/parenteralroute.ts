/**
 * Parenteral
 * http://terminology.hl7.org/ValueSet/v3-ParenteralRoute
 */
export const ParenteralRouteCode = {
  /**
   * Injection, parenteral
   */
  Injectionparenteral: "PARENTINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParenteralRouteCode =
  typeof ParenteralRouteCode[keyof typeof ParenteralRouteCode];
