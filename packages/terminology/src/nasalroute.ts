/**
 * Nasal
 * http://terminology.hl7.org/ValueSet/v3-NasalRoute
 */
export const NasalRouteCode = {
  /**
   * Inhalation, nasal
   */
  Inhalationnasal: "NASINHL",

  /**
   * Inhalation, nasal cannula
   */
  Inhalationnasalcannula: "NASINHLC",

  /**
   * Inhalation, nasal cannula
   */
  Inhalationnasalcannula: "NP",

  /**
   * Instillation, nasal
   */
  Instillationnasal: "NASALINSTIL",

  /**
   * Instillation, nasogastric
   */
  Instillationnasogastric: "NASOGASINSTIL",

  /**
   * Topical application, nasal
   */
  Topicalapplicationnasal: "NASAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NasalRouteCode = typeof NasalRouteCode[keyof typeof NasalRouteCode];
