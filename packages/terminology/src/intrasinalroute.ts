/**
 * Intrasinal
 * http://terminology.hl7.org/ValueSet/v3-IntrasinalRoute
 */
export const IntrasinalRouteCode = {
  /**
   * Instillation, intrasinal
   */
  ISININSTIL: "ISININSTIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrasinalRouteCode =
  typeof IntrasinalRouteCode[keyof typeof IntrasinalRouteCode];
