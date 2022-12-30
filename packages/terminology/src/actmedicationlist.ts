/**
 * List of medications.
 * http://terminology.hl7.org/ValueSet/v3-ActMedicationList
 */
export const ActMedicationListCode = {
  /**
   * medication list
   */
  MEDLIST: "MEDLIST",

  /**
   * current medication list
   */
  CURMEDLIST: "CURMEDLIST",

  /**
   * discharge medication list
   */
  DISCMEDLIST: "DISCMEDLIST",

  /**
   * medication history
   */
  HISTMEDLIST: "HISTMEDLIST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMedicationListCode =
  typeof ActMedicationListCode[keyof typeof ActMedicationListCode];
