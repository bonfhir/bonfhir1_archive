/**
 * Direction in which lists of possible answers should be displayed.
 * http://terminology.hl7.org/ValueSet/medicationrequest-admin-location
 */
export const MedicationRequestAdministrationLocationCode = {
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
export type MedicationRequestAdministrationLocationCode =
  typeof MedicationRequestAdministrationLocationCode[keyof typeof MedicationRequestAdministrationLocationCode];
