/**
 * Ureteral
 * http://terminology.hl7.org/ValueSet/v3-UreteralRoute
 */
export const UreteralRouteCode = {
  /**
   * Injection, ureteral
   */
  URETINJ: "URETINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UreteralRouteCode =
  typeof UreteralRouteCode[keyof typeof UreteralRouteCode];
