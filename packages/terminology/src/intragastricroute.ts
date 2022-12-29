/**
 * Intragastric
 * http://terminology.hl7.org/ValueSet/v3-IntragastricRoute
 */
export const IntragastricRouteCode = {
  /**
   * Instillation, intragastric
   */
  Instillationintragastric: "IGASTINSTIL",

  /**
   * Irrigation, intragastric
   */
  Irrigationintragastric: "IGASTIRR",

  /**
   * Lavage, intragastric
   */
  Lavageintragastric: "IGASTLAV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntragastricRouteCode =
  typeof IntragastricRouteCode[keyof typeof IntragastricRouteCode];
