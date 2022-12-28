/**
 * Nail
 * http://terminology.hl7.org/ValueSet/v3-NailRoute
 */
export const NailRouteCode = {
  /**
   * Topical application, nail
   */
  NAIL: "NAIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NailRouteCode = typeof NailRouteCode[keyof typeof NailRouteCode];
