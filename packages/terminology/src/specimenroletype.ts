/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SpecimenRoleType
 */
export const SpecimenRoleTypeCode = {
  /**
   * Calibrator
   */
  Calibrator: "C",

  /**
   * Group
   */
  Group: "G",

  /**
   * Pool
   */
  Pool: "L",

  /**
   * Patient
   */
  Patient: "P",

  /**
   * Quality Control
   */
  QualityControl: "Q",

  /**
   * Blind
   */
  Blind: "B",

  /**
   * Electronic QC
   */
  ElectronicQC: "E",

  /**
   * Filler Proficiency
   */
  FillerProficiency: "F",

  /**
   * Operator Proficiency
   */
  OperatorProficiency: "O",

  /**
   * Verifying
   */
  Verifying: "V",

  /**
   * Replicate
   */
  Replicate: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenRoleTypeCode =
  typeof SpecimenRoleTypeCode[keyof typeof SpecimenRoleTypeCode];
