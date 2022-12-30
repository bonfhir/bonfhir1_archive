/**
 * Direction in which lists of possible answers should be displayed.
 * http://terminology.hl7.org/ValueSet/medication-usage-admin-location
 */
export const MedicationUsageAdministrationLocationCode = {
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
export type MedicationUsageAdministrationLocationCode =
  typeof MedicationUsageAdministrationLocationCode[keyof typeof MedicationUsageAdministrationLocationCode];
