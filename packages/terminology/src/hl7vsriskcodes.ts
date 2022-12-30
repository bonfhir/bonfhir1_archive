/**
 * Value Set of codes that specify any known or suspected specimen hazards, e.g., exceptionally infectious agent or blood from a hepatitis patient.
 * http://terminology.hl7.org/ValueSet/v2-0489
 */
export const Hl7VSRiskCodesCode = {
  /**
   * Biological
   */
  BIO: "BIO",

  /**
   * Corrosive
   */
  COR: "COR",

  /**
   * Escape Risk
   */
  ESC: "ESC",

  /**
   * Aggressive
   */
  AGG: "AGG",

  /**
   * MaterialDangerInflammable
   */
  IFL: "IFL",

  /**
   * Explosive
   */
  EXP: "EXP",

  /**
   * MaterialDangerInfectious
   */
  INF: "INF",

  /**
   * Biohazard
   */
  BHZ: "BHZ",

  /**
   * Injury Hazard
   */
  INJ: "INJ",

  /**
   * Poison
   */
  POI: "POI",

  /**
   * Radioactive
   */
  RAD: "RAD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRiskCodesCode =
  typeof Hl7VSRiskCodesCode[keyof typeof Hl7VSRiskCodesCode];
