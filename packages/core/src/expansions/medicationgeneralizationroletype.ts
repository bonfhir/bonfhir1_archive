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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationGeneralizationRoleTypeCode =
  typeof MedicationGeneralizationRoleTypeCode[keyof typeof MedicationGeneralizationRoleTypeCode];
