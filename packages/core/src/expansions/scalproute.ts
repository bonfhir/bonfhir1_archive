/**
 * Scalp
 * http://terminology.hl7.org/ValueSet/v3-ScalpRoute
 */
export const ScalpRouteCode = {
  /**
   * Topical application, scalp
   */
  SCALP: "SCALP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ScalpRouteCode = typeof ScalpRouteCode[keyof typeof ScalpRouteCode];
