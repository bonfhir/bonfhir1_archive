/**
 * Intracoronary
 * http://terminology.hl7.org/ValueSet/v3-IntracoronaryRoute
 */
export const IntracoronaryRouteCode = {
  /**
   * Infusion, intracoronary
   */
  ICOR: "ICOR",

  /**
   * Injection, intracoronary
   */
  ICORONINJ: "ICORONINJ",

  /**
   * Injection, intracoronary, push
   */
  ICORONINJP: "ICORONINJP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracoronaryRouteCode =
  typeof IntracoronaryRouteCode[keyof typeof IntracoronaryRouteCode];
