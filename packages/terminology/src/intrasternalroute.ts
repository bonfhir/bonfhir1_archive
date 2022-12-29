/**
 * Intrasternal
 * http://terminology.hl7.org/ValueSet/v3-IntrasternalRoute
 */
export const IntrasternalRouteCode = {
  /**
   * Injection, intrasternal
   */
  Injectionintrasternal: "ISTERINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrasternalRouteCode =
  typeof IntrasternalRouteCode[keyof typeof IntrasternalRouteCode];
