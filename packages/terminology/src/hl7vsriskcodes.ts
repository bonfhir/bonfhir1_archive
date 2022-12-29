/**
 * Value Set of codes that specify any known or suspected specimen hazards, e.g., exceptionally infectious agent or blood from a hepatitis patient.
 * http://terminology.hl7.org/ValueSet/v2-0489
 */
export const Hl7VSRiskCodesCode = {
  /**
   * Biological
   */
  Biological: "BIO",

  /**
   * Corrosive
   */
  Corrosive: "COR",

  /**
   * Escape Risk
   */
  EscapeRisk: "ESC",

  /**
   * Aggressive
   */
  Aggressive: "AGG",

  /**
   * MaterialDangerInflammable
   */
  MaterialDangerInflammable: "IFL",

  /**
   * Explosive
   */
  Explosive: "EXP",

  /**
   * MaterialDangerInfectious
   */
  MaterialDangerInfectious: "INF",

  /**
   * Biohazard
   */
  Biohazard: "BHZ",

  /**
   * Injury Hazard
   */
  InjuryHazard: "INJ",

  /**
   * Poison
   */
  Poison: "POI",

  /**
   * Radioactive
   */
  Radioactive: "RAD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRiskCodesCode =
  typeof Hl7VSRiskCodesCode[keyof typeof Hl7VSRiskCodesCode];
