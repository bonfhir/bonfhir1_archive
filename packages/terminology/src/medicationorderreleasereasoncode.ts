/**
 * **Definition:**A collection of concepts that indicate why the prescription should be released from suspended state.
 * http://terminology.hl7.org/ValueSet/v3-MedicationOrderReleaseReasonCode
 */
export const MedicationOrderReleaseReasonCodeCode = {
  /**
   * medication order release reason
   */
  _MedicationOrderReleaseReasonCode: "_MedicationOrderReleaseReasonCode",

  /**
   * suspend reason no longer applies
   */
  HOLDDONE: "HOLDDONE",

  /**
   * suspend reason inappropriate
   */
  HOLDINAP: "HOLDINAP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationOrderReleaseReasonCodeCode =
  typeof MedicationOrderReleaseReasonCodeCode[keyof typeof MedicationOrderReleaseReasonCodeCode];
