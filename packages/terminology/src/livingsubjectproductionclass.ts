/**
 * Code indicating the primary use for which a living subject is bred or grown
 * http://terminology.hl7.org/ValueSet/v3-LivingSubjectProductionClass
 */
export const LivingSubjectProductionClassCode = {
  /**
   * Beef
   */
  BF: "BF",

  /**
   * Broiler
   */
  BL: "BL",

  /**
   * Breeder
   */
  BR: "BR",

  /**
   * Companion
   */
  CO: "CO",

  /**
   * Dairy
   */
  DA: "DA",

  /**
   * Draft
   */
  DR: "DR",

  /**
   * Dual
   */
  DU: "DU",

  /**
   * Fiber
   */
  FI: "FI",

  /**
   * Layer
   */
  LY: "LY",

  /**
   * Meat
   */
  MT: "MT",

  /**
   * Multiplier
   */
  MU: "MU",

  /**
   * Pleasure
   */
  PL: "PL",

  /**
   * Racing
   */
  RC: "RC",

  /**
   * Show
   */
  SH: "SH",

  /**
   * Veal
   */
  VL: "VL",

  /**
   * Wool
   */
  WL: "WL",

  /**
   * Working
   */
  WO: "WO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LivingSubjectProductionClassCode =
  typeof LivingSubjectProductionClassCode[keyof typeof LivingSubjectProductionClassCode];
