/**
 * A person reviews a list of medication orders submitted to a given patient
 * http://terminology.hl7.org/ValueSet/v3-ActTaskMedicationListReviewCode
 */
export const ActTaskMedicationListReviewCodeCode = {
  /**
   * medication list review task
   */
  medicationlistreviewtask: "MLREV",

  /**
   * medication administration record work list review task
   */
  medicationadministrationrecordworklistreviewtask: "MARWLREV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskMedicationListReviewCodeCode =
  typeof ActTaskMedicationListReviewCodeCode[keyof typeof ActTaskMedicationListReviewCodeCode];
