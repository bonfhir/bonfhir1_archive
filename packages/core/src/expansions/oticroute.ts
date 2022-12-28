/**
 * Otic
 * http://terminology.hl7.org/ValueSet/v3-OticRoute
 */
export const OticRouteCode = {
  /**
   * Instillation, otic
   */
  OT: "OT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OticRouteCode = typeof OticRouteCode[keyof typeof OticRouteCode];
