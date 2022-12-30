/**
 * Intrathoracic
 * http://terminology.hl7.org/ValueSet/v3-IntrathoracicRoute
 */
export const IntrathoracicRouteCode = {
  /**
   * Injection, intrathoracic
   */
  ITHORINJ: "ITHORINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrathoracicRouteCode =
  typeof IntrathoracicRouteCode[keyof typeof IntrathoracicRouteCode];
