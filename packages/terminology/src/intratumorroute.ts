/**
 * Intratumor
 * http://terminology.hl7.org/ValueSet/v3-IntratumorRoute
 */
export const IntratumorRouteCode = {
  /**
   * Injection, intratumor
   */
  ITUMINJ: "ITUMINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntratumorRouteCode =
  typeof IntratumorRouteCode[keyof typeof IntratumorRouteCode];
