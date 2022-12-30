/**
 * Value Set of codes that identify the role of a sample.
 * http://terminology.hl7.org/ValueSet/v2-0369
 */
export const Hl7VSSpecimenRoleCode = {
  /**
   * Blind Sample
   */
  B: "B",

  /**
   * Calibrator
   */
  C: "C",

  /**
   * Electronic QC
   */
  E: "E",

  /**
   * Filler Organization Proficiency
   */
  F: "F",

  /**
   * Group
   */
  G: "G",

  /**
   * Historical Specimen
   */
  H: "H",

  /**
   * Pool
   */
  L: "L",

  /**
   * Operator Proficiency
   */
  O: "O",

  /**
   * Patient
   */
  P: "P",

  /**
   * Control specimen
   */
  Q: "Q",

  /**
   * Replicate (of patient sample as a control)
   */
  R: "R",

  /**
   * Verifying Calibrator
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenRoleCode =
  typeof Hl7VSSpecimenRoleCode[keyof typeof Hl7VSSpecimenRoleCode];
