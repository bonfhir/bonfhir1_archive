/**
 * Value Set of codes specifying the incident that occurred during a patient's stay.
 * http://terminology.hl7.org/ValueSet/v2-0427
 */
export const Hl7VSRiskManagementIncidentCodeCode = {
  /**
   * Body fluid exposure
   */
  B: "B",

  /**
   * Contaminated Substance
   */
  C: "C",

  /**
   * Diet Errors
   */
  D: "D",

  /**
   * Equipment problem
   */
  E: "E",

  /**
   * Patient fell (not from bed)
   */
  F: "F",

  /**
   * Patient fell from bed
   */
  H: "H",

  /**
   * Infusion error
   */
  I: "I",

  /**
   * Foreign object left during surgery
   */
  J: "J",

  /**
   * Sterile precaution violated
   */
  K: "K",

  /**
   * Procedure error
   */
  P: "P",

  /**
   * Pharmaceutical error
   */
  R: "R",

  /**
   * Suicide Attempt
   */
  S: "S",

  /**
   * Transfusion error
   */
  T: "T",

  /**
   * Other
   */
  O: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRiskManagementIncidentCodeCode =
  typeof Hl7VSRiskManagementIncidentCodeCode[keyof typeof Hl7VSRiskManagementIncidentCodeCode];
