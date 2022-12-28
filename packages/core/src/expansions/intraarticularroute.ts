/**
 * Intraarticular
 * http://terminology.hl7.org/ValueSet/v3-IntraarticularRoute
 */
export const IntraarticularRouteCode = {
  /**
   * Injection, intraarticular
   */
  IARTINJ: "IARTINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraarticularRouteCode =
  typeof IntraarticularRouteCode[keyof typeof IntraarticularRouteCode];
