/**
 * Value Set of codes identifying the type of substance.
 * http://terminology.hl7.org/ValueSet/v2-0384
 */
export const Hl7VSSubstanceTypeCode = {
  /**
   * Single Test Reagent
   */
  SR: "SR",

  /**
   * Multiple Test Reagent
   */
  MR: "MR",

  /**
   * Diluent
   */
  DI: "DI",

  /**
   * Pretreatment
   */
  PT: "PT",

  /**
   * Reagent Calibrator
   */
  RC: "RC",

  /**
   * Control Reagent
   */
  CO: "CO",

  /**
   * Purified Water
   */
  PW: "PW",

  /**
   * Liquid Waste
   */
  LW: "LW",

  /**
   * Solid Waste
   */
  SW: "SW",

  /**
   * Countable Solid Item
   */
  SC: "SC",

  /**
   * Measurable Liquid Item
   */
  LI: "LI",

  /**
   * Other
   */
  OT: "OT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSubstanceTypeCode =
  typeof Hl7VSSubstanceTypeCode[keyof typeof Hl7VSSubstanceTypeCode];
