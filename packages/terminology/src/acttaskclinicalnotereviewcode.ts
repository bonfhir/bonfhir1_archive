/**
 * A person reviews a clinical note of a given patient.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskClinicalNoteReviewCode
 */
export const ActTaskClinicalNoteReviewCodeCode = {
  /**
   * clinical note review task
   */
  clinicalnotereviewtask: "CLINNOTEREV",

  /**
   * discharge summary review task
   */
  dischargesummaryreviewtask: "DISCHSUMREV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskClinicalNoteReviewCodeCode =
  typeof ActTaskClinicalNoteReviewCodeCode[keyof typeof ActTaskClinicalNoteReviewCodeCode];
