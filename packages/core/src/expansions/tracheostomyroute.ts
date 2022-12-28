/**
 * Tracheostomy
 * http://terminology.hl7.org/ValueSet/v3-TracheostomyRoute
 */
export const TracheostomyRouteCode = {
  /**
   * Inhalation, tracheostomy
   */
  TRACH: "TRACH",

  /**
   * Instillation, tracheostomy
   */
  TRACHINSTL: "TRACHINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TracheostomyRouteCode =
  typeof TracheostomyRouteCode[keyof typeof TracheostomyRouteCode];
