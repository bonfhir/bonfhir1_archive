/**
 * Intraductal
 * http://terminology.hl7.org/ValueSet/v3-IntraductalRoute
 */
export const IntraductalRouteCode = {
  /**
   * Injection, intraductal
   */
  Injectionintraductal: "IDUCTINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraductalRouteCode =
  typeof IntraductalRouteCode[keyof typeof IntraductalRouteCode];
