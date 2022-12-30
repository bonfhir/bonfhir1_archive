/**
 * Direction in which lists of possible answers should be displayed.
 * http://terminology.hl7.org/ValueSet/medication-admin-location
 */
export const MedicationAdministrationLocationCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationAdministrationLocationCode =
  typeof MedicationAdministrationLocationCode[keyof typeof MedicationAdministrationLocationCode];
