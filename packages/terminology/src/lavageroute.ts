/**
 * Lavage
 * http://terminology.hl7.org/ValueSet/v3-LavageRoute
 */
export const LavageRouteCode = {
  /**
   * Lavage, intragastric
   */
  IGASTLAV: "IGASTLAV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LavageRouteCode =
  typeof LavageRouteCode[keyof typeof LavageRouteCode];
