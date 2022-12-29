/**
 * Buccal mucosa
 * http://terminology.hl7.org/ValueSet/v3-BuccalMucosaRoute
 */
export const BuccalMucosaRouteCode = {
  /**
   * Topical application, buccal
   */
  Topicalapplicationbuccal: "BUC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BuccalMucosaRouteCode =
  typeof BuccalMucosaRouteCode[keyof typeof BuccalMucosaRouteCode];
