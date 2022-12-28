/**
 * Interameningeal
 * http://terminology.hl7.org/ValueSet/v3-InterameningealRoute
 */
export const InterameningealRouteCode = {
  /**
   * Injection, interameningeal
   */
  INTERMENINJ: "INTERMENINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InterameningealRouteCode =
  typeof InterameningealRouteCode[keyof typeof InterameningealRouteCode];
