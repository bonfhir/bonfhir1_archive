/**
 * Perineal
 * http://terminology.hl7.org/ValueSet/v3-PerinealRoute
 */
export const PerinealRouteCode = {
  /**
   * Topical application, perineal
   */
  Topicalapplicationperineal: "PERINEAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PerinealRouteCode =
  typeof PerinealRouteCode[keyof typeof PerinealRouteCode];
