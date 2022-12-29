/**
 * Sinus, unspecified
 * http://terminology.hl7.org/ValueSet/v3-SinusUnspecifiedRoute
 */
export const SinusUnspecifiedRouteCode = {
  /**
   * Injection, endosinusial
   */
  Injectionendosinusial: "ENDOSININJ",

  /**
   * Instillation, sinus, unspecified
   */
  Instillationsinusunspecified: "SININSTIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SinusUnspecifiedRouteCode =
  typeof SinusUnspecifiedRouteCode[keyof typeof SinusUnspecifiedRouteCode];
