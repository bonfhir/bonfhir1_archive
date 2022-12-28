/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SpecimenRoleType
 */
export const SpecimenRoleTypeCode = {
  /**
   * Calibrator
   */
  C: "C",

  /**
   * Group
   */
  G: "G",

  /**
   * Pool
   */
  L: "L",

  /**
   * Patient
   */
  P: "P",

  /**
   * Quality Control
   */
  Q: "Q",

  /**
   * Blind
   */
  B: "B",

  /**
   * Electronic QC
   */
  E: "E",

  /**
   * Filler Proficiency
   */
  F: "F",

  /**
   * Operator Proficiency
   */
  O: "O",

  /**
   * Verifying
   */
  V: "V",

  /**
   * Replicate
   */
  R: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecimenRoleTypeCode =
  typeof SpecimenRoleTypeCode[keyof typeof SpecimenRoleTypeCode];
