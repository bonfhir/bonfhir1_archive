/**
 * Subarachnoid
 * http://terminology.hl7.org/ValueSet/v3-SubarachnoidRoute
 */
export const SubarachnoidRouteCode = {
  /**
   * Injection, subarachnoid
   */
  SUBARACHINJ: "SUBARACHINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubarachnoidRouteCode =
  typeof SubarachnoidRouteCode[keyof typeof SubarachnoidRouteCode];
