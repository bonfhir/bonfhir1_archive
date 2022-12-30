/**
 * Value Set of codes specifying the code and/or text indicating the primary use for which the living subject was bred or grown.
 * http://terminology.hl7.org/ValueSet/v2-0429
 */
export const Hl7VSProductionClassCodeCode = {
  /**
   * Breeding/genetic stock
   */
  BR: "BR",

  /**
   * Dairy
   */
  DA: "DA",

  /**
   * Draft
   */
  DR: "DR",

  /**
   * Dual Purpose
   */
  DU: "DU",

  /**
   * Layer, Includes Multiplier flocks
   */
  LY: "LY",

  /**
   * Meat
   */
  MT: "MT",

  /**
   * Other
   */
  OT: "OT",

  /**
   * Pleasure
   */
  PL: "PL",

  /**
   * Racing
   */
  RA: "RA",

  /**
   * Show
   */
  SH: "SH",

  /**
   * Not Applicable
   */
  NA: "NA",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProductionClassCodeCode =
  typeof Hl7VSProductionClassCodeCode[keyof typeof Hl7VSProductionClassCodeCode];
