/**
 * Intratracheal
 * http://terminology.hl7.org/ValueSet/v3-IntratrachealRoute
 */
export const IntratrachealRouteCode = {
  /**
   * Instillation, intratracheal
   */
  Instillationintratracheal: "ITRACHINSTIL",

  /**
   * Mucosal absorption, intratracheal
   */
  Mucosalabsorptionintratracheal: "ITRACHMAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntratrachealRouteCode =
  typeof IntratrachealRouteCode[keyof typeof IntratrachealRouteCode];
