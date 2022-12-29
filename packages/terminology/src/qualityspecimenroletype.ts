/**
 * A specimen specifically used to verify the sensitivity, specificity, accuracy or other perfomance parameter of a diagnostic test.
 * http://terminology.hl7.org/ValueSet/v3-QualitySpecimenRoleType
 */
export const QualitySpecimenRoleTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QualitySpecimenRoleTypeCode =
  typeof QualitySpecimenRoleTypeCode[keyof typeof QualitySpecimenRoleTypeCode];
