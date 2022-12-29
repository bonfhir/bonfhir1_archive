/**
 * The vocabulary table for the Entity.riskCode attribute
 * http://terminology.hl7.org/ValueSet/v3-EntityRisk
 */
export const EntityRiskCode = {
  /**
   * aggressive
   */
  aggressive: "AGG",

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
   * injury hazard
   */
  injuryhazard: "INJ",

  /**
   * poison
   */
  poison: "POI",

  /**
   * radioactive
   */
  radioactive: "RAD",

  /**
   * infectious
   */
  infectious: "INF",

  /**
   * biohazard
   */
  biohazard: "BHZ",

  /**
   * inflammable
   */
  inflammable: "IFL",

  /**
   * explosive
   */
  explosive: "EXP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityRiskCode = typeof EntityRiskCode[keyof typeof EntityRiskCode];
