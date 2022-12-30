/**
 * Lingual
 * http://terminology.hl7.org/ValueSet/v3-LingualRoute
 */
export const LingualRouteCode = {
  /**
   * Translingual
   */
  TRNSLING: "TRNSLING",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LingualRouteCode =
  typeof LingualRouteCode[keyof typeof LingualRouteCode];
