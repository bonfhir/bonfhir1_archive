/**
 * Urinary tract
 * http://terminology.hl7.org/ValueSet/v3-UrinaryTractRoute
 */
export const UrinaryTractRouteCode = {
  /**
   * Instillation, urinary catheter
   */
  Instillationurinarycatheter: "BLADINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UrinaryTractRouteCode =
  typeof UrinaryTractRouteCode[keyof typeof UrinaryTractRouteCode];
