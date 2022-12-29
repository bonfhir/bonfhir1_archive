/**
 * Subconjunctival
 * http://terminology.hl7.org/ValueSet/v3-SubconjunctivalRoute
 */
export const SubconjunctivalRouteCode = {
  /**
   * Injection, subconjunctival
   */
  Injectionsubconjunctival: "SCINJ",

  /**
   * Subconjunctival
   */
  Subconjunctival: "SUBCONJTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubconjunctivalRouteCode =
  typeof SubconjunctivalRouteCode[keyof typeof SubconjunctivalRouteCode];
