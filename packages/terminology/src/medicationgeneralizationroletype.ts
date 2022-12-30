/**
 * Identifies the specific hierarchical relationship between the playing and scoping medications.

*Examples:* Generic, Generic Formulation, Therapeutic Class, etc.
 * http://terminology.hl7.org/ValueSet/v3-MedicationGeneralizationRoleType
 */
export const MedicationGeneralizationRoleTypeCode = {
  /**
   * MedicationGeneralizationRoleType
   */
  _MedicationGeneralizationRoleType: "_MedicationGeneralizationRoleType",

  /**
   * therapeutic class
   */
  DC: "DC",

  /**
   * generic drug
   */
  GD: "GD",

  /**
   * generic drug form
   */
  GDF: "GDF",

  /**
   * generic drug strength
   */
  GDS: "GDS",

  /**
   * generic drug strength form
   */
  GDSF: "GDSF",

  /**
   * manufactured drug strength form
   */
  MGDSF: "MGDSF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationGeneralizationRoleTypeCode =
  typeof MedicationGeneralizationRoleTypeCode[keyof typeof MedicationGeneralizationRoleTypeCode];
