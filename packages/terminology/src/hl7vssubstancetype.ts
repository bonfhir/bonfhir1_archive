/**
 * Value Set of codes identifying the type of substance.
 * http://terminology.hl7.org/ValueSet/v2-0384
 */
export const Hl7VSSubstanceTypeCode = {
  /**
   * Single Test Reagent
   */
  SingleTestReagent: "SR",

  /**
   * Multiple Test Reagent
   */
  MultipleTestReagent: "MR",

  /**
   * Diluent
   */
  Diluent: "DI",

  /**
   * Pretreatment
   */
  Pretreatment: "PT",

  /**
   * Reagent Calibrator
   */
  ReagentCalibrator: "RC",

  /**
   * Control Reagent
   */
  ControlReagent: "CO",

  /**
   * Purified Water
   */
  PurifiedWater: "PW",

  /**
   * Liquid Waste
   */
  LiquidWaste: "LW",

  /**
   * Solid Waste
   */
  SolidWaste: "SW",

  /**
   * Countable Solid Item
   */
  CountableSolidItem: "SC",

  /**
   * Measurable Liquid Item
   */
  MeasurableLiquidItem: "LI",

  /**
   * Other
   */
  Other: "OT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSubstanceTypeCode =
  typeof Hl7VSSubstanceTypeCode[keyof typeof Hl7VSSubstanceTypeCode];
