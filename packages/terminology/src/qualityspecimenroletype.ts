/**
 * A specimen specifically used to verify the sensitivity, specificity, accuracy or other perfomance parameter of a diagnostic test.
 * http://terminology.hl7.org/ValueSet/v3-QualitySpecimenRoleType
 */
export const QualitySpecimenRoleTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type QualitySpecimenRoleTypeCode =
  typeof QualitySpecimenRoleTypeCode[keyof typeof QualitySpecimenRoleTypeCode];
