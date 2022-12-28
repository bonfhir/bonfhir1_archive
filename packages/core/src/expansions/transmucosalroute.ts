/**
 * Transmucosal
 * http://terminology.hl7.org/ValueSet/v3-TransmucosalRoute
 */
export const TransmucosalRouteCode = {
  /**
   * Topical application, transmucosal
   */
  TMUCTA: "TMUCTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TransmucosalRouteCode =
  typeof TransmucosalRouteCode[keyof typeof TransmucosalRouteCode];
