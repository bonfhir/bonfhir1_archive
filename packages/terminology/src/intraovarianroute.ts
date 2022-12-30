/**
 * Intraovarian
 * http://terminology.hl7.org/ValueSet/v3-IntraovarianRoute
 */
export const IntraovarianRouteCode = {
  /**
   * Injection, intraovarian
   */
  IOVARINJ: "IOVARINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraovarianRouteCode =
  typeof IntraovarianRouteCode[keyof typeof IntraovarianRouteCode];
