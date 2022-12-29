/**
 * Gastric
 * http://terminology.hl7.org/ValueSet/v3-GastricRoute
 */
export const GastricRouteCode = {
  /**
   * Injection, gastric button
   */
  Injectiongastricbutton: "GBINJ",

  /**
   * Instillation, gastrostomy tube
   */
  Instillationgastrostomytube: "GT",

  /**
   * Instillation, nasogastric tube
   */
  Instillationnasogastrictube: "NGT",

  /**
   * Instillation, orogastric tube
   */
  Instillationorogastrictube: "OGT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GastricRouteCode =
  typeof GastricRouteCode[keyof typeof GastricRouteCode];
