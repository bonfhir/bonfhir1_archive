/**
 * Peridural
 * http://terminology.hl7.org/ValueSet/v3-PeriduralRoute
 */
export const PeriduralRouteCode = {
  /**
   * Injection, peridural
   */
  PDURINJ: "PDURINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PeriduralRouteCode =
  typeof PeriduralRouteCode[keyof typeof PeriduralRouteCode];
