/**
 * Test methods designed to determine a microorganismaTMs susceptibility to being killed by an antibiotic.
 * http://terminology.hl7.org/ValueSet/v3-tst0280
 */
export const Tst0280Code = {
  /**
   * Susceptibility Testing
   */
  SusceptibilityTesting: "0280",

  /**
   * Antibiotic sensitivity, disk
   */
  Antibioticsensitivitydisk: "0240",

  /**
   * BACTEC susceptibility test
   */
  BACTECsusceptibilitytest: "0241",

  /**
   * Disk dilution
   */
  Diskdilution: "0242",

  /**
   * Minimum Inhibitory Concentration
   */
  MinimumInhibitoryConcentration: "0272",

  /**
   * Minimum Inhibitory Concentration, macrodilution
   */
  MinimumInhibitoryConcentrationmacrodilution: "0245",

  /**
   * Minimum Inhibitory Concentration, microdilution
   */
  MinimumInhibitoryConcentrationmicrodilution: "0246",

  /**
   * Viral Genotype Susceptibility
   */
  ViralGenotypeSusceptibility: "0273",

  /**
   * Viral Phenotype Susceptibility
   */
  ViralPhenotypeSusceptibility: "0274",

  /**
   * Gradient Strip
   */
  GradientStrip: "0275",

  /**
   * Minimum Lethal Concentration (MLC)
   */
  MinimumLethalConcentrationMLC: "0275a",

  /**
   * Slow Mycobacteria Susceptibility
   */
  SlowMycobacteriaSusceptibility: "0276",

  /**
   * Serum bactericidal titer
   */
  Serumbactericidaltiter: "0277",

  /**
   * Agar screen
   */
  Agarscreen: "0278",

  /**
   * Disk induction
   */
  Diskinduction: "0279",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Tst0280Code = typeof Tst0280Code[keyof typeof Tst0280Code];
