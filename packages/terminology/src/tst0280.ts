/**
 * Test methods designed to determine a microorganismaTMs susceptibility to being killed by an antibiotic.
 * http://terminology.hl7.org/ValueSet/v3-tst0280
 */
export const Tst0280Code = {
  /**
   * Susceptibility Testing
   */
  "0280": "0280",

  /**
   * Antibiotic sensitivity, disk
   */
  "0240": "0240",

  /**
   * BACTEC susceptibility test
   */
  "0241": "0241",

  /**
   * Disk dilution
   */
  "0242": "0242",

  /**
   * Minimum Inhibitory Concentration
   */
  "0272": "0272",

  /**
   * Minimum Inhibitory Concentration, macrodilution
   */
  "0245": "0245",

  /**
   * Minimum Inhibitory Concentration, microdilution
   */
  "0246": "0246",

  /**
   * Viral Genotype Susceptibility
   */
  "0273": "0273",

  /**
   * Viral Phenotype Susceptibility
   */
  "0274": "0274",

  /**
   * Gradient Strip
   */
  "0275": "0275",

  /**
   * Minimum Lethal Concentration (MLC)
   */
  "0275a": "0275a",

  /**
   * Slow Mycobacteria Susceptibility
   */
  "0276": "0276",

  /**
   * Serum bactericidal titer
   */
  "0277": "0277",

  /**
   * Agar screen
   */
  "0278": "0278",

  /**
   * Disk induction
   */
  "0279": "0279",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Tst0280Code = typeof Tst0280Code[keyof typeof Tst0280Code];
