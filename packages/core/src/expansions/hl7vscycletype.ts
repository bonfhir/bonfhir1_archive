/**
 * Value Set of codes that specify the type of cycle that is being executed.  A cycle type is a specific sterilization method used for a specific type of supply item.
 * http://terminology.hl7.org/ValueSet/v2-0702
 */
export const Hl7VSCycleTypeCode = {
  /**
   * Flash
   */
  FLS: "FLS",

  /**
   * Prevac
   */
  PRV: "PRV",

  /**
   * Gravity
   */
  GRV: "GRV",

  /**
   * Liquid
   */
  LQD: "LQD",

  /**
   * Express
   */
  EXP: "EXP",

  /**
   * Dart
   */
  DRT: "DRT",

  /**
   * Dart Warm-up Cycle
   */
  DRW: "DRW",

  /**
   * Thermal
   */
  THR: "THR",

  /**
   * Isothermal
   */
  ISO: "ISO",

  /**
   * Bowie-Dick Test
   */
  BWD: "BWD",

  /**
   * Leak Test
   */
  LKT: "LKT",

  /**
   * Wrap/Steam Flush Pressure Pulse (Wrap/SFPP)
   */
  WFP: "WFP",

  /**
   * Steam Flush Pressure Pulse
   */
  SFP: "SFP",

  /**
   * Chemical Wash
   */
  CMW: "CMW",

  /**
   * Peracetic Acid
   */
  PEA: "PEA",

  /**
   * EO High Temperature
   */
  EOH: "EOH",

  /**
   * EO Low Temperature
   */
  EOL: "EOL",

  /**
   * Cart Wash
   */
  CRT: "CRT",

  /**
   * Utensil Wash
   */
  UTL: "UTL",

  /**
   * Instrument Wash
   */
  IST: "IST",

  /**
   * Glassware
   */
  GLS: "GLS",

  /**
   * Plastic Goods Wash
   */
  PLA: "PLA",

  /**
   * Anesthesia/Respiratory
   */
  ANR: "ANR",

  /**
   * Gentle
   */
  GTL: "GTL",

  /**
   * Optional Wash
   */
  OPW: "OPW",

  /**
   * Bedpans
   */
  BDP: "BDP",

  /**
   * Tray/Basin
   */
  TRB: "TRB",

  /**
   * Gen. Purpose
   */
  GNP: "GNP",

  /**
   * Code
   */
  COD: "COD",

  /**
   * Rinse
   */
  RNS: "RNS",

  /**
   * Second Rinse
   */
  "2RS": "2RS",

  /**
   * Decontamination
   */
  DEC: "DEC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCycleTypeCode =
  typeof Hl7VSCycleTypeCode[keyof typeof Hl7VSCycleTypeCode];
