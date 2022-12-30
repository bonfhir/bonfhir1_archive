/**
 * Intrabronchial
 * http://terminology.hl7.org/ValueSet/v3-IntrabronchialRoute
 */
export const IntrabronchialRouteCode = {
  /**
   * Instillation, intrabronchial
   */
  IBRONCHINSTIL: "IBRONCHINSTIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrabronchialRouteCode =
  typeof IntrabronchialRouteCode[keyof typeof IntrabronchialRouteCode];
