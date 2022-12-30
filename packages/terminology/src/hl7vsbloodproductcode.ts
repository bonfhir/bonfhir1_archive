/**
 * Value Set of codes specifying the blood product code.
 * http://terminology.hl7.org/ValueSet/v2-0426
 */
export const Hl7VSBloodProductCodeCode = {
  /**
   * Cryoprecipitated AHF
   */
  CRYO: "CRYO",

  /**
   * Pooled Cryoprecipitate
   */
  CRYOP: "CRYOP",

  /**
   * Fresh Frozen Plasma
   */
  FFP: "FFP",

  /**
   * Fresh Frozen Plasma - Thawed
   */
  FFPTH: "FFPTH",

  /**
   * Packed Cells
   */
  PC: "PC",

  /**
   * Autologous Packed Cells
   */
  PCA: "PCA",

  /**
   * Packed Cells - Neonatal
   */
  PCNEO: "PCNEO",

  /**
   * Washed Packed Cells
   */
  PCW: "PCW",

  /**
   * Platelet Concentrate
   */
  PLT: "PLT",

  /**
   * Reduced Volume Platelets
   */
  PLTNEO: "PLTNEO",

  /**
   * Pooled Platelets
   */
  PLTP: "PLTP",

  /**
   * Platelet Pheresis
   */
  PLTPH: "PLTPH",

  /**
   * Leukoreduced Platelet Pheresis
   */
  PLTPHLR: "PLTPHLR",

  /**
   * Reconstituted Whole Blood
   */
  RWB: "RWB",

  /**
   * Autologous Whole Blood
   */
  WBA: "WBA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBloodProductCodeCode =
  typeof Hl7VSBloodProductCodeCode[keyof typeof Hl7VSBloodProductCodeCode];
