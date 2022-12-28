/**
 * Submucosal
 * http://terminology.hl7.org/ValueSet/v3-SubmucosalRoute
 */
export const SubmucosalRouteCode = {
  /**
   * Injection, submucosal
   */
  SUBMUCINJ: "SUBMUCINJ",

  /**
   * Mucosal absorption, submucosal
   */
  SMUCMAB: "SMUCMAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubmucosalRouteCode =
  typeof SubmucosalRouteCode[keyof typeof SubmucosalRouteCode];
