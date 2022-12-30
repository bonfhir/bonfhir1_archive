/**
 * The vocabulary table for the Entity.riskCode attribute
 * http://terminology.hl7.org/ValueSet/v3-EntityRisk
 */
export const EntityRiskCode = {
  /**
   * aggressive
   */
  AGG: "AGG",

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
   * injury hazard
   */
  INJ: "INJ",

  /**
   * poison
   */
  POI: "POI",

  /**
   * radioactive
   */
  RAD: "RAD",

  /**
   * infectious
   */
  INF: "INF",

  /**
   * biohazard
   */
  BHZ: "BHZ",

  /**
   * inflammable
   */
  IFL: "IFL",

  /**
   * explosive
   */
  EXP: "EXP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityRiskCode = typeof EntityRiskCode[keyof typeof EntityRiskCode];
