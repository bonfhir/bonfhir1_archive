/**
 * Value Set of codes that specify the mechanical device used to aid in the administration of the drug or other treatment.  Common examples are IV-sets of different types.
 * http://terminology.hl7.org/ValueSet/v2-0164
 */
export const Hl7VSAdministrationDeviceCode = {
  /**
   * Applicator
   */
  AP: "AP",

  /**
   * Buretrol
   */
  BT: "BT",

  /**
   * Heparin Lock
   */
  HL: "HL",

  /**
   * IPPB
   */
  IPPB: "IPPB",

  /**
   * IV Pump
   */
  IVP: "IVP",

  /**
   * IV Soluset
   */
  IVS: "IVS",

  /**
   * Metered Inhaler
   */
  MI: "MI",

  /**
   * Nebulizer
   */
  NEB: "NEB",

  /**
   * PCA Pump
   */
  PCA: "PCA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdministrationDeviceCode =
  typeof Hl7VSAdministrationDeviceCode[keyof typeof Hl7VSAdministrationDeviceCode];
