/**
 * Transmucosal
 * http://terminology.hl7.org/ValueSet/v3-TransmucosalRoute
 */
export const TransmucosalRouteCode = {
  /**
   * Topical application, transmucosal
   */
  Topicalapplicationtransmucosal: "TMUCTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TransmucosalRouteCode =
  typeof TransmucosalRouteCode[keyof typeof TransmucosalRouteCode];
