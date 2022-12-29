/**
 * Value Set of codes that identify the role of a sample.
 * http://terminology.hl7.org/ValueSet/v2-0369
 */
export const Hl7VSSpecimenRoleCode = {
  /**
   * Blind Sample
   */
  BlindSample: "B",

  /**
   * Calibrator
   */
  Calibrator: "C",

  /**
   * Electronic QC
   */
  ElectronicQC: "E",

  /**
   * Filler Organization Proficiency
   */
  FillerOrganizationProficiency: "F",

  /**
   * Group
   */
  Group: "G",

  /**
   * Historical Specimen
   */
  HistoricalSpecimen: "H",

  /**
   * Pool
   */
  Pool: "L",

  /**
   * Operator Proficiency
   */
  OperatorProficiency: "O",

  /**
   * Patient
   */
  Patient: "P",

  /**
   * Control specimen
   */
  Controlspecimen: "Q",

  /**
   * Replicate (of patient sample as a control)
   */
  Replicateofpatientsampleasacontrol: "R",

  /**
   * Verifying Calibrator
   */
  VerifyingCalibrator: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenRoleCode =
  typeof Hl7VSSpecimenRoleCode[keyof typeof Hl7VSSpecimenRoleCode];
