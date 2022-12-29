/**
 * Submucosal
 * http://terminology.hl7.org/ValueSet/v3-SubmucosalRoute
 */
export const SubmucosalRouteCode = {
  /**
   * Injection, submucosal
   */
  Injectionsubmucosal: "SUBMUCINJ",

  /**
   * Mucosal absorption, submucosal
   */
  Mucosalabsorptionsubmucosal: "SMUCMAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubmucosalRouteCode =
  typeof SubmucosalRouteCode[keyof typeof SubmucosalRouteCode];
