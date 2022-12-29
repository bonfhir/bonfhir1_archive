/**
 * Genitourinary
 * http://terminology.hl7.org/ValueSet/v3-GenitourinaryRoute
 */
export const GenitourinaryRouteCode = {
  /**
   * Irrigation, genitourinary
   */
  Irrigationgenitourinary: "GUIRR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GenitourinaryRouteCode =
  typeof GenitourinaryRouteCode[keyof typeof GenitourinaryRouteCode];
