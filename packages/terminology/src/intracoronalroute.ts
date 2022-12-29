/**
 * Intracoronal (dental)
 * http://terminology.hl7.org/ValueSet/v3-IntracoronalRoute
 */
export const IntracoronalRouteCode = {
  /**
   * Topical application, intracoronal (dental)
   */
  Topicalapplicationintracoronaldental: "ICORONTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracoronalRouteCode =
  typeof IntracoronalRouteCode[keyof typeof IntracoronalRouteCode];
