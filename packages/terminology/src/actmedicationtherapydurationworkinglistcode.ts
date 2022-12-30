/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActMedicationTherapyDurationWorkingListCode
 */
export const ActMedicationTherapyDurationWorkingListCodeCode = {
  /**
   * act medication therapy duration working list
   */
  _ActMedicationTherapyDurationWorkingListCode:
    "_ActMedicationTherapyDurationWorkingListCode",

  /**
   * short term/acute
   */
  ACU: "ACU",

  /**
   * continuous/chronic
   */
  CHRON: "CHRON",

  /**
   * one time
   */
  ONET: "ONET",

  /**
   * as needed
   */
  PRN: "PRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMedicationTherapyDurationWorkingListCodeCode =
  typeof ActMedicationTherapyDurationWorkingListCodeCode[keyof typeof ActMedicationTherapyDurationWorkingListCodeCode];
