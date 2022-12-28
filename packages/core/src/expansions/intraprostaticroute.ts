/**
 * Intraprostatic
 * http://terminology.hl7.org/ValueSet/v3-IntraprostaticRoute
 */
export const IntraprostaticRouteCode = {
  /**
   * Injection, intraprostatic
   */
  IPROSTINJ: "IPROSTINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraprostaticRouteCode =
  typeof IntraprostaticRouteCode[keyof typeof IntraprostaticRouteCode];
