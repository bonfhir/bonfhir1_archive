/**
 * Intramedullary
 * http://terminology.hl7.org/ValueSet/v3-IntramedullaryRoute
 */
export const IntramedullaryRouteCode = {
  /**
   * Injection, intramedullary
   */
  Injectionintramedullary: "IMEDULINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntramedullaryRouteCode =
  typeof IntramedullaryRouteCode[keyof typeof IntramedullaryRouteCode];
