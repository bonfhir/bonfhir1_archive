/**
 * Intracoronary
 * http://terminology.hl7.org/ValueSet/v3-IntracoronaryRoute
 */
export const IntracoronaryRouteCode = {
  /**
   * Infusion, intracoronary
   */
  Infusionintracoronary: "ICOR",

  /**
   * Injection, intracoronary
   */
  Injectionintracoronary: "ICORONINJ",

  /**
   * Injection, intracoronary, push
   */
  Injectionintracoronarypush: "ICORONINJP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracoronaryRouteCode =
  typeof IntracoronaryRouteCode[keyof typeof IntracoronaryRouteCode];
