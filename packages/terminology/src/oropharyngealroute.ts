/**
 * Oropharyngeal
 * http://terminology.hl7.org/ValueSet/v3-OropharyngealRoute
 */
export const OropharyngealRouteCode = {
  /**
   * Topical application, oropharyngeal
   */
  Topicalapplicationoropharyngeal: "OROPHARTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OropharyngealRouteCode =
  typeof OropharyngealRouteCode[keyof typeof OropharyngealRouteCode];
