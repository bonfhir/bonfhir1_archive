/**
 * Laryngeal
 * http://terminology.hl7.org/ValueSet/v3-LaryngealRoute
 */
export const LaryngealRouteCode = {
  /**
   * Instillation, laryngeal
   */
  LARYNGINSTIL: "LARYNGINSTIL",

  /**
   * Topical application, laryngeal
   */
  LARYNGTA: "LARYNGTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LaryngealRouteCode =
  typeof LaryngealRouteCode[keyof typeof LaryngealRouteCode];
