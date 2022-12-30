/**
 * Intra-abdominal
 * http://terminology.hl7.org/ValueSet/v3-IntraabdominalRoute
 */
export const IntraabdominalRouteCode = {
  /**
   * Injection, intra-abdominal
   */
  IABDINJ: "IABDINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraabdominalRouteCode =
  typeof IntraabdominalRouteCode[keyof typeof IntraabdominalRouteCode];
