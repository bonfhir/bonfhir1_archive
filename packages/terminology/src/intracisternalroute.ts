/**
 * Intracisternal
 * http://terminology.hl7.org/ValueSet/v3-IntracisternalRoute
 */
export const IntracisternalRouteCode = {
  /**
   * Injection, intracisternal
   */
  Injectionintracisternal: "ICISTERNINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracisternalRouteCode =
  typeof IntracisternalRouteCode[keyof typeof IntracisternalRouteCode];
