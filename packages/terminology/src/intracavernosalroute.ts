/**
 * Intracavernosal
 * http://terminology.hl7.org/ValueSet/v3-IntracavernosalRoute
 */
export const IntracavernosalRouteCode = {
  /**
   * Injection, intracavernous
   */
  Injectionintracavernous: "ICAVINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracavernosalRouteCode =
  typeof IntracavernosalRouteCode[keyof typeof IntracavernosalRouteCode];
