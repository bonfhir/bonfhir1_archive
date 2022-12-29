/**
 * Periodontal
 * http://terminology.hl7.org/ValueSet/v3-PeriodontalRoute
 */
export const PeriodontalRouteCode = {
  /**
   * Injection, periodontal
   */
  Injectionperiodontal: "PDONTINJ",

  /**
   * Topical application, periodontal
   */
  Topicalapplicationperiodontal: "PDONTTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PeriodontalRouteCode =
  typeof PeriodontalRouteCode[keyof typeof PeriodontalRouteCode];
