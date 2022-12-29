/**
 * Lacrimal puncta
 * http://terminology.hl7.org/ValueSet/v3-LacrimalPunctaRoute
 */
export const LacrimalPunctaRouteCode = {
  /**
   * Insertion, lacrimal puncta
   */
  Insertionlacrimalpuncta: "LPINS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LacrimalPunctaRouteCode =
  typeof LacrimalPunctaRouteCode[keyof typeof LacrimalPunctaRouteCode];
