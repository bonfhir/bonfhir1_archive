/**
 * Interstitial
 * http://terminology.hl7.org/ValueSet/v3-InterstitialRoute
 */
export const InterstitialRouteCode = {
  /**
   * Injection, interstitial
   */
  INTERSTITINJ: "INTERSTITINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InterstitialRouteCode =
  typeof InterstitialRouteCode[keyof typeof InterstitialRouteCode];
