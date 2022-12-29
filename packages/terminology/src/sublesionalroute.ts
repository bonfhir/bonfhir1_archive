/**
 * Sublesional
 * http://terminology.hl7.org/ValueSet/v3-SublesionalRoute
 */
export const SublesionalRouteCode = {
  /**
   * Injection, sublesional
   */
  Injectionsublesional: "SLESINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SublesionalRouteCode =
  typeof SublesionalRouteCode[keyof typeof SublesionalRouteCode];
