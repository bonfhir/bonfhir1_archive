/**
 * MedicationRequest Category Codes
 * http://terminology.hl7.org/ValueSet/medicationrequest-category
 */
export const MedicationRequestCategoryCodesCode = {
  /**
   * Inpatient
   */
  inpatient: "inpatient",

  /**
   * Outpatient
   */
  outpatient: "outpatient",

  /**
   * Community
   */
  community: "community",

  /**
   * Discharge
   */
  discharge: "discharge",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationRequestCategoryCodesCode =
  typeof MedicationRequestCategoryCodesCode[keyof typeof MedicationRequestCategoryCodesCode];
