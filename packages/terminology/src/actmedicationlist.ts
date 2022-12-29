/**
 * List of medications.
 * http://terminology.hl7.org/ValueSet/v3-ActMedicationList
 */
export const ActMedicationListCode = {
  /**
   * medication list
   */
  medicationlist: "MEDLIST",

  /**
   * current medication list
   */
  currentmedicationlist: "CURMEDLIST",

  /**
   * discharge medication list
   */
  dischargemedicationlist: "DISCMEDLIST",

  /**
   * medication history
   */
  medicationhistory: "HISTMEDLIST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMedicationListCode =
  typeof ActMedicationListCode[keyof typeof ActMedicationListCode];
