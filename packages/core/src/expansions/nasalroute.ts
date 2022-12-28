/**
 * Nasal
 * http://terminology.hl7.org/ValueSet/v3-NasalRoute
 */
export const NasalRouteCode = {
  /**
   * Inhalation, nasal
   */
  NASINHL: "NASINHL",

  /**
   * Inhalation, nasal cannula
   */
  NASINHLC: "NASINHLC",

  /**
   * Inhalation, nasal cannula
   */
  NP: "NP",

  /**
   * Instillation, nasal
   */
  NASALINSTIL: "NASALINSTIL",

  /**
   * Instillation, nasogastric
   */
  NASOGASINSTIL: "NASOGASINSTIL",

  /**
   * Topical application, nasal
   */
  NASAL: "NASAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NasalRouteCode = typeof NasalRouteCode[keyof typeof NasalRouteCode];
