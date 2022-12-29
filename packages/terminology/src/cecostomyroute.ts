/**
 * Cecostomy
 * http://terminology.hl7.org/ValueSet/v3-CecostomyRoute
 */
export const CecostomyRouteCode = {
  /**
   * Instillation, cecostomy
   */
  Instillationcecostomy: "CECINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CecostomyRouteCode =
  typeof CecostomyRouteCode[keyof typeof CecostomyRouteCode];
