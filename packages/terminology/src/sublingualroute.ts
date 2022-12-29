/**
 * Sublingual
 * http://terminology.hl7.org/ValueSet/v3-SublingualRoute
 */
export const SublingualRouteCode = {
  /**
   * Dissolve, sublingual
   */
  Dissolvesublingual: "SL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SublingualRouteCode =
  typeof SublingualRouteCode[keyof typeof SublingualRouteCode];
