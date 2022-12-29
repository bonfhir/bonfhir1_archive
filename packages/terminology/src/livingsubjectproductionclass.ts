/**
 * Code indicating the primary use for which a living subject is bred or grown
 * http://terminology.hl7.org/ValueSet/v3-LivingSubjectProductionClass
 */
export const LivingSubjectProductionClassCode = {
  /**
   * Beef
   */
  Beef: "BF",

  /**
   * Broiler
   */
  Broiler: "BL",

  /**
   * Breeder
   */
  Breeder: "BR",

  /**
   * Companion
   */
  Companion: "CO",

  /**
   * Dairy
   */
  Dairy: "DA",

  /**
   * Draft
   */
  Draft: "DR",

  /**
   * Dual
   */
  Dual: "DU",

  /**
   * Fiber
   */
  Fiber: "FI",

  /**
   * Layer
   */
  Layer: "LY",

  /**
   * Meat
   */
  Meat: "MT",

  /**
   * Multiplier
   */
  Multiplier: "MU",

  /**
   * Pleasure
   */
  Pleasure: "PL",

  /**
   * Racing
   */
  Racing: "RC",

  /**
   * Show
   */
  Show: "SH",

  /**
   * Veal
   */
  Veal: "VL",

  /**
   * Wool
   */
  Wool: "WL",

  /**
   * Working
   */
  Working: "WO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LivingSubjectProductionClassCode =
  typeof LivingSubjectProductionClassCode[keyof typeof LivingSubjectProductionClassCode];
