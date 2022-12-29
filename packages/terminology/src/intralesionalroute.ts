/**
 * Intralesional
 * http://terminology.hl7.org/ValueSet/v3-IntralesionalRoute
 */
export const IntralesionalRouteCode = {
  /**
   * Injection, intralesional
   */
  Injectionintralesional: "ILESINJ",

  /**
   * Irrigation, intralesional
   */
  Irrigationintralesional: "ILESIRR",

  /**
   * Topical application, intralesional
   */
  Topicalapplicationintralesional: "ILTOP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntralesionalRouteCode =
  typeof IntralesionalRouteCode[keyof typeof IntralesionalRouteCode];
