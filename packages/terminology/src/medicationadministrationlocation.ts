/**
 * Direction in which lists of possible answers should be displayed.
 * http://terminology.hl7.org/ValueSet/medication-admin-location
 */
export const MedicationAdministrationLocationCode = {
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
export type MedicationAdministrationLocationCode =
  typeof MedicationAdministrationLocationCode[keyof typeof MedicationAdministrationLocationCode];
