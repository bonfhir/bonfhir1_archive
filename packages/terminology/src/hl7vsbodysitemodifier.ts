/**
 * Value Set of codes that specify the modifier for the body site.
 * http://terminology.hl7.org/ValueSet/v2-0495
 */
export const Hl7VSBodySiteModifierCode = {
  /**
   * Anterior
   */
  Anterior: "ANT",

  /**
   * Bilateral
   */
  Bilateral: "BIL",

  /**
   * Distal
   */
  Distal: "DIS",

  /**
   * External
   */
  External: "EXT",

  /**
   * Lateral
   */
  Lateral: "LAT",

  /**
   * Left
   */
  Left: "L",

  /**
   * Lower
   */
  Lower: "LOW",

  /**
   * Medial
   */
  Medial: "MED",

  /**
   * Posterior
   */
  Posterior: "POS",

  /**
   * Proximal
   */
  Proximal: "PRO",

  /**
   * Quadrant, Left Lower
   */
  QuadrantLeftLower: "LLQ",

  /**
   * Quadrant, Left Upper
   */
  QuadrantLeftUpper: "LUQ",

  /**
   * Quadrant, Right Lower
   */
  QuadrantRightLower: "RLQ",

  /**
   * Quadrant, Right Upper
   */
  QuadrantRightUpper: "RUQ",

  /**
   * Right
   */
  Right: "R",

  /**
   * Upper
   */
  Upper: "UPP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBodySiteModifierCode =
  typeof Hl7VSBodySiteModifierCode[keyof typeof Hl7VSBodySiteModifierCode];
