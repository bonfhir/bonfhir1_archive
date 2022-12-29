/**
 * Perineural
 * http://terminology.hl7.org/ValueSet/v3-PerineuralRoute
 */
export const PerineuralRouteCode = {
  /**
   * Injection, perineural
   */
  Injectionperineural: "PNINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PerineuralRouteCode =
  typeof PerineuralRouteCode[keyof typeof PerineuralRouteCode];
