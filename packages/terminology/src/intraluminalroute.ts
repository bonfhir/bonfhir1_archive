/**
 * Intraluminal
 * http://terminology.hl7.org/ValueSet/v3-IntraluminalRoute
 */
export const IntraluminalRouteCode = {
  /**
   * Injection, intraluminal
   */
  ILUMINJ: "ILUMINJ",

  /**
   * Topical application, intraluminal
   */
  ILUMTA: "ILUMTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraluminalRouteCode =
  typeof IntraluminalRouteCode[keyof typeof IntraluminalRouteCode];
