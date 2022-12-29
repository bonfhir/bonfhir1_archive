/**
 * Intradiscal
 * http://terminology.hl7.org/ValueSet/v3-IntradiscalRoute
 */
export const IntradiscalRouteCode = {
  /**
   * Injection, intradiscal
   */
  Injectionintradiscal: "IDISCINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntradiscalRouteCode =
  typeof IntradiscalRouteCode[keyof typeof IntradiscalRouteCode];
