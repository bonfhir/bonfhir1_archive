/**
 * Gingival
 * http://terminology.hl7.org/ValueSet/v3-GingivalRoute
 */
export const GingivalRouteCode = {
  /**
   * Topical application, gingival
   */
  Topicalapplicationgingival: "GIN",

  /**
   * Injection, gingival
   */
  Injectiongingival: "GINGINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GingivalRouteCode =
  typeof GingivalRouteCode[keyof typeof GingivalRouteCode];
