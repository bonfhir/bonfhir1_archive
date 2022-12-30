/**
 * Intratympanic
 * http://terminology.hl7.org/ValueSet/v3-IntratympanicRoute
 */
export const IntratympanicRouteCode = {
  /**
   * Injection, intratympanic
   */
  ITYMPINJ: "ITYMPINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntratympanicRouteCode =
  typeof IntratympanicRouteCode[keyof typeof IntratympanicRouteCode];
