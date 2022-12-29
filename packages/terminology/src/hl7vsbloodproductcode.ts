/**
 * Value Set of codes specifying the blood product code.
 * http://terminology.hl7.org/ValueSet/v2-0426
 */
export const Hl7VSBloodProductCodeCode = {
  /**
   * Cryoprecipitated AHF
   */
  CryoprecipitatedAHF: "CRYO",

  /**
   * Pooled Cryoprecipitate
   */
  PooledCryoprecipitate: "CRYOP",

  /**
   * Fresh Frozen Plasma
   */
  FreshFrozenPlasma: "FFP",

  /**
   * Fresh Frozen Plasma - Thawed
   */
  FreshFrozenPlasmaThawed: "FFPTH",

  /**
   * Packed Cells
   */
  PackedCells: "PC",

  /**
   * Autologous Packed Cells
   */
  AutologousPackedCells: "PCA",

  /**
   * Packed Cells - Neonatal
   */
  PackedCellsNeonatal: "PCNEO",

  /**
   * Washed Packed Cells
   */
  WashedPackedCells: "PCW",

  /**
   * Platelet Concentrate
   */
  PlateletConcentrate: "PLT",

  /**
   * Reduced Volume Platelets
   */
  ReducedVolumePlatelets: "PLTNEO",

  /**
   * Pooled Platelets
   */
  PooledPlatelets: "PLTP",

  /**
   * Platelet Pheresis
   */
  PlateletPheresis: "PLTPH",

  /**
   * Leukoreduced Platelet Pheresis
   */
  LeukoreducedPlateletPheresis: "PLTPHLR",

  /**
   * Reconstituted Whole Blood
   */
  ReconstitutedWholeBlood: "RWB",

  /**
   * Autologous Whole Blood
   */
  AutologousWholeBlood: "WBA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBloodProductCodeCode =
  typeof Hl7VSBloodProductCodeCode[keyof typeof Hl7VSBloodProductCodeCode];
