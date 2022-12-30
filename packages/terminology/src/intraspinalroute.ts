/**
 * Intraspinal
 * http://terminology.hl7.org/ValueSet/v3-IntraspinalRoute
 */
export const IntraspinalRouteCode = {
  /**
   * Injection, intraspinal
   */
  ISINJ: "ISINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraspinalRouteCode =
  typeof IntraspinalRouteCode[keyof typeof IntraspinalRouteCode];
