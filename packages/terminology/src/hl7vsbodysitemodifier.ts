/**
 * Value Set of codes that specify the modifier for the body site.
 * http://terminology.hl7.org/ValueSet/v2-0495
 */
export const Hl7VSBodySiteModifierCode = {
  /**
   * Anterior
   */
  ANT: "ANT",

  /**
   * Bilateral
   */
  BIL: "BIL",

  /**
   * Distal
   */
  DIS: "DIS",

  /**
   * External
   */
  EXT: "EXT",

  /**
   * Lateral
   */
  LAT: "LAT",

  /**
   * Left
   */
  L: "L",

  /**
   * Lower
   */
  LOW: "LOW",

  /**
   * Medial
   */
  MED: "MED",

  /**
   * Posterior
   */
  POS: "POS",

  /**
   * Proximal
   */
  PRO: "PRO",

  /**
   * Quadrant, Left Lower
   */
  LLQ: "LLQ",

  /**
   * Quadrant, Left Upper
   */
  LUQ: "LUQ",

  /**
   * Quadrant, Right Lower
   */
  RLQ: "RLQ",

  /**
   * Quadrant, Right Upper
   */
  RUQ: "RUQ",

  /**
   * Right
   */
  R: "R",

  /**
   * Upper
   */
  UPP: "UPP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBodySiteModifierCode =
  typeof Hl7VSBodySiteModifierCode[keyof typeof Hl7VSBodySiteModifierCode];
