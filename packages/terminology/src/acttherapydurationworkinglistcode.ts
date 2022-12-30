/**
 * Codes used to identify different types of 'duration-based' working lists. Examples include "Continuous/Chronic", "Short-Term" and "As-Needed".
 * http://terminology.hl7.org/ValueSet/v3-ActTherapyDurationWorkingListCode
 */
export const ActTherapyDurationWorkingListCodeCode = {
  /**
   * ActTherapyDurationWorkingListCode
   */
  _ActTherapyDurationWorkingListCode: "_ActTherapyDurationWorkingListCode",

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
export type ActTherapyDurationWorkingListCodeCode =
  typeof ActTherapyDurationWorkingListCodeCode[keyof typeof ActTherapyDurationWorkingListCodeCode];
