/**
 * Intradural
 * http://terminology.hl7.org/ValueSet/v3-IntraduralRoute
 */
export const IntraduralRouteCode = {
  /**
   * Injection, intradural
   */
  Injectionintradural: "IDURINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraduralRouteCode =
  typeof IntraduralRouteCode[keyof typeof IntraduralRouteCode];
