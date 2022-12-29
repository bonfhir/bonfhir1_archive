/**
 * Value Set of codes that specify the type of cycle that is being executed.  A cycle type is a specific sterilization method used for a specific type of supply item.
 * http://terminology.hl7.org/ValueSet/v2-0702
 */
export const Hl7VSCycleTypeCode = {
  /**
   * Flash
   */
  Flash: "FLS",

  /**
   * Prevac
   */
  Prevac: "PRV",

  /**
   * Gravity
   */
  Gravity: "GRV",

  /**
   * Liquid
   */
  Liquid: "LQD",

  /**
   * Express
   */
  Express: "EXP",

  /**
   * Dart
   */
  Dart: "DRT",

  /**
   * Dart Warm-up Cycle
   */
  DartWarmupCycle: "DRW",

  /**
   * Thermal
   */
  Thermal: "THR",

  /**
   * Isothermal
   */
  Isothermal: "ISO",

  /**
   * Bowie-Dick Test
   */
  BowieDickTest: "BWD",

  /**
   * Leak Test
   */
  LeakTest: "LKT",

  /**
   * Wrap/Steam Flush Pressure Pulse (Wrap/SFPP)
   */
  WrapSteamFlushPressurePulseWrapSFPP: "WFP",

  /**
   * Steam Flush Pressure Pulse
   */
  SteamFlushPressurePulse: "SFP",

  /**
   * Chemical Wash
   */
  ChemicalWash: "CMW",

  /**
   * Peracetic Acid
   */
  PeraceticAcid: "PEA",

  /**
   * EO High Temperature
   */
  EOHighTemperature: "EOH",

  /**
   * EO Low Temperature
   */
  EOLowTemperature: "EOL",

  /**
   * Cart Wash
   */
  CartWash: "CRT",

  /**
   * Utensil Wash
   */
  UtensilWash: "UTL",

  /**
   * Instrument Wash
   */
  InstrumentWash: "IST",

  /**
   * Glassware
   */
  Glassware: "GLS",

  /**
   * Plastic Goods Wash
   */
  PlasticGoodsWash: "PLA",

  /**
   * Anesthesia/Respiratory
   */
  AnesthesiaRespiratory: "ANR",

  /**
   * Gentle
   */
  Gentle: "GTL",

  /**
   * Optional Wash
   */
  OptionalWash: "OPW",

  /**
   * Bedpans
   */
  Bedpans: "BDP",

  /**
   * Tray/Basin
   */
  TrayBasin: "TRB",

  /**
   * Gen. Purpose
   */
  GenPurpose: "GNP",

  /**
   * Code
   */
  Code: "COD",

  /**
   * Rinse
   */
  Rinse: "RNS",

  /**
   * Second Rinse
   */
  SecondRinse: "2RS",

  /**
   * Decontamination
   */
  Decontamination: "DEC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCycleTypeCode =
  typeof Hl7VSCycleTypeCode[keyof typeof Hl7VSCycleTypeCode];
