/**
 * Intravesicle
 * http://terminology.hl7.org/ValueSet/v3-IntravesicleRoute
 */
export const IntravesicleRouteCode = {
  /**
   * Injection, intravesicle
   */
  Injectionintravesicle: "IVESINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravesicleRouteCode =
  typeof IntravesicleRouteCode[keyof typeof IntravesicleRouteCode];
