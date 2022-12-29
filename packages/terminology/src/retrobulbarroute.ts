/**
 * Retrobulbar
 * http://terminology.hl7.org/ValueSet/v3-RetrobulbarRoute
 */
export const RetrobulbarRouteCode = {
  /**
   * Injection, retrobulbar
   */
  Injectionretrobulbar: "RBINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RetrobulbarRouteCode =
  typeof RetrobulbarRouteCode[keyof typeof RetrobulbarRouteCode];
