/**
 * Codes used to identify different types of 'duration-based' working lists. Examples include "Continuous/Chronic", "Short-Term" and "As-Needed".
 * http://terminology.hl7.org/ValueSet/v3-ActTherapyDurationWorkingListCode
 */
export const ActTherapyDurationWorkingListCodeCode = {
  /**
   * ActTherapyDurationWorkingListCode
   */
  ActTherapyDurationWorkingListCode: "_ActTherapyDurationWorkingListCode",

  /**
   * act medication therapy duration working list
   */
  actmedicationtherapydurationworkinglist:
    "_ActMedicationTherapyDurationWorkingListCode",

  /**
   * short term/acute
   */
  shorttermacute: "ACU",

  /**
   * continuous/chronic
   */
  continuouschronic: "CHRON",

  /**
   * one time
   */
  onetime: "ONET",

  /**
   * as needed
   */
  asneeded: "PRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTherapyDurationWorkingListCodeCode =
  typeof ActTherapyDurationWorkingListCodeCode[keyof typeof ActTherapyDurationWorkingListCodeCode];
