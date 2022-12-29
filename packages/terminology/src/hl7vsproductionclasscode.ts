/**
 * Value Set of codes specifying the code and/or text indicating the primary use for which the living subject was bred or grown.
 * http://terminology.hl7.org/ValueSet/v2-0429
 */
export const Hl7VSProductionClassCodeCode = {
  /**
   * Breeding/genetic stock
   */
  Breedinggeneticstock: "BR",

  /**
   * Dairy
   */
  Dairy: "DA",

  /**
   * Draft
   */
  Draft: "DR",

  /**
   * Dual Purpose
   */
  DualPurpose: "DU",

  /**
   * Layer, Includes Multiplier flocks
   */
  LayerIncludesMultiplierflocks: "LY",

  /**
   * Meat
   */
  Meat: "MT",

  /**
   * Other
   */
  Other: "OT",

  /**
   * Pleasure
   */
  Pleasure: "PL",

  /**
   * Racing
   */
  Racing: "RA",

  /**
   * Show
   */
  Show: "SH",

  /**
   * Not Applicable
   */
  NotApplicable: "NA",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProductionClassCodeCode =
  typeof Hl7VSProductionClassCodeCode[keyof typeof Hl7VSProductionClassCodeCode];
