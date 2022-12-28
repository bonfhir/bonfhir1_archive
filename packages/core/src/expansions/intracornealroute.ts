/**
 * Intracorneal
 * http://terminology.hl7.org/ValueSet/v3-IntracornealRoute
 */
export const IntracornealRouteCode = {
  /**
   * Topical application, intracorneal
   */
  ICORNTA: "ICORNTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracornealRouteCode =
  typeof IntracornealRouteCode[keyof typeof IntracornealRouteCode];
