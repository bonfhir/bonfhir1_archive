/**
 * Intraperitoneal
 * http://terminology.hl7.org/ValueSet/v3-IntraperitonealRoute
 */
export const IntraperitonealRouteCode = {
  /**
   * Injection, intraperitoneal
   */
  IPERINJ: "IPERINJ",

  /**
   * Injection, peritoneal dialysis port
   */
  PDPINJ: "PDPINJ",

  /**
   * Instillation, continuous ambulatory peritoneal dialysis port
   */
  CAPDINSTL: "CAPDINSTL",

  /**
   * Instillation, peritoneal dialysis port
   */
  PDPINSTL: "PDPINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraperitonealRouteCode =
  typeof IntraperitonealRouteCode[keyof typeof IntraperitonealRouteCode];
