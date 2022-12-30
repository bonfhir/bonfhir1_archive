/**
 * Intraileal
 * http://terminology.hl7.org/ValueSet/v3-IntrailealRoute
 */
export const IntrailealRouteCode = {
  /**
   * Instillation, intraileal
   */
  IILEALINJ: "IILEALINJ",

  /**
   * Topical application, intraileal
   */
  IILEALTA: "IILEALTA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntrailealRouteCode =
  typeof IntrailealRouteCode[keyof typeof IntrailealRouteCode];
