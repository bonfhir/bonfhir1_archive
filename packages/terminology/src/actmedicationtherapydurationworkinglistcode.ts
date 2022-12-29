/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActMedicationTherapyDurationWorkingListCode
 */
export const ActMedicationTherapyDurationWorkingListCodeCode = {
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
export type ActMedicationTherapyDurationWorkingListCodeCode =
  typeof ActMedicationTherapyDurationWorkingListCodeCode[keyof typeof ActMedicationTherapyDurationWorkingListCodeCode];
