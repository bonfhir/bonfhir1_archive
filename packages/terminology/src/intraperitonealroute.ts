/**
 * Intraperitoneal
 * http://terminology.hl7.org/ValueSet/v3-IntraperitonealRoute
 */
export const IntraperitonealRouteCode = {
  /**
   * Injection, intraperitoneal
   */
  Injectionintraperitoneal: "IPERINJ",

  /**
   * Injection, peritoneal dialysis port
   */
  Injectionperitonealdialysisport: "PDPINJ",

  /**
   * Instillation, continuous ambulatory peritoneal dialysis port
   */
  Instillationcontinuousambulatoryperitonealdialysisport: "CAPDINSTL",

  /**
   * Instillation, peritoneal dialysis port
   */
  Instillationperitonealdialysisport: "PDPINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraperitonealRouteCode =
  typeof IntraperitonealRouteCode[keyof typeof IntraperitonealRouteCode];
