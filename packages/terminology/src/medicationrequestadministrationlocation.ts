/**
 * Direction in which lists of possible answers should be displayed.
 * http://terminology.hl7.org/ValueSet/medicationrequest-admin-location
 */
export const MedicationRequestAdministrationLocationCode = {
  /**
   * Inpatient
   */
  Inpatient: "inpatient",

  /**
   * Outpatient
   */
  Outpatient: "outpatient",

  /**
   * Community
   */
  Community: "community",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationRequestAdministrationLocationCode =
  typeof MedicationRequestAdministrationLocationCode[keyof typeof MedicationRequestAdministrationLocationCode];
