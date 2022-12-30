/**
 * Gastric
 * http://terminology.hl7.org/ValueSet/v3-GastricRoute
 */
export const GastricRouteCode = {
  /**
   * Injection, gastric button
   */
  GBINJ: "GBINJ",

  /**
   * Instillation, gastrostomy tube
   */
  GT: "GT",

  /**
   * Instillation, nasogastric tube
   */
  NGT: "NGT",

  /**
   * Instillation, orogastric tube
   */
  OGT: "OGT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GastricRouteCode =
  typeof GastricRouteCode[keyof typeof GastricRouteCode];
