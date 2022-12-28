/**
 * Intrasynovial
 * http://terminology.hl7.org/ValueSet/v3-IntrasynovialRoute
 */
export const IntrasynovialRouteCode = {
  /**
   * Injection, intrasynovial
   */
  ISYNINJ: "ISYNINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrasynovialRouteCode =
  typeof IntrasynovialRouteCode[keyof typeof IntrasynovialRouteCode];
