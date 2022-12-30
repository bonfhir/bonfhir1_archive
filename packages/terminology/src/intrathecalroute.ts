/**
 * Intrathecal
 * http://terminology.hl7.org/ValueSet/v3-IntrathecalRoute
 */
export const IntrathecalRouteCode = {
  /**
   * Infusion, intrathecal
   */
  IT: "IT",

  /**
   * Injection, intrathecal
   */
  ITINJ: "ITINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrathecalRouteCode =
  typeof IntrathecalRouteCode[keyof typeof IntrathecalRouteCode];
