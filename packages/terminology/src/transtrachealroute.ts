/**
 * Transtracheal
 * http://terminology.hl7.org/ValueSet/v3-TranstrachealRoute
 */
export const TranstrachealRouteCode = {
  /**
   * Injection, transtracheal
   */
  Injectiontranstracheal: "TRTRACHINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TranstrachealRouteCode =
  typeof TranstrachealRouteCode[keyof typeof TranstrachealRouteCode];
