/**
 * Intrathecal
 * http://terminology.hl7.org/ValueSet/v3-IntrathecalRoute
 */
export const IntrathecalRouteCode = {
  /**
   * Infusion, intrathecal
   */
  Infusionintrathecal: "IT",

  /**
   * Injection, intrathecal
   */
  Injectionintrathecal: "ITINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrathecalRouteCode =
  typeof IntrathecalRouteCode[keyof typeof IntrathecalRouteCode];
