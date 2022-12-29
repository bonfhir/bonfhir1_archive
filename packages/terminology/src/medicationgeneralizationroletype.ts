/**
 * Identifies the specific hierarchical relationship between the playing and scoping medications.

*Examples:* Generic, Generic Formulation, Therapeutic Class, etc.
 * http://terminology.hl7.org/ValueSet/v3-MedicationGeneralizationRoleType
 */
export const MedicationGeneralizationRoleTypeCode = {
  /**
   * MedicationGeneralizationRoleType
   */
  MedicationGeneralizationRoleType: "_MedicationGeneralizationRoleType",

  /**
   * therapeutic class
   */
  therapeuticclass: "DC",

  /**
   * generic drug
   */
  genericdrug: "GD",

  /**
   * generic drug form
   */
  genericdrugform: "GDF",

  /**
   * generic drug strength
   */
  genericdrugstrength: "GDS",

  /**
   * generic drug strength form
   */
  genericdrugstrengthform: "GDSF",

  /**
   * manufactured drug strength form
   */
  manufactureddrugstrengthform: "MGDSF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationGeneralizationRoleTypeCode =
  typeof MedicationGeneralizationRoleTypeCode[keyof typeof MedicationGeneralizationRoleTypeCode];
