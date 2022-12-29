/**
 * Soft tissue
 * http://terminology.hl7.org/ValueSet/v3-SoftTissueRoute
 */
export const SoftTissueRouteCode = {
  /**
   * Injection, soft tissue
   */
  Injectionsofttissue: "SOFTISINJ",

  /**
   * Instillation, soft tissue
   */
  Instillationsofttissue: "SOFTISINSTIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SoftTissueRouteCode =
  typeof SoftTissueRouteCode[keyof typeof SoftTissueRouteCode];
