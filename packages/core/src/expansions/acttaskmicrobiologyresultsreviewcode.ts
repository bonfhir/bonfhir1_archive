/**
 * A person reviews a list of microbiology results of a given patient.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskMicrobiologyResultsReviewCode
 */
export const ActTaskMicrobiologyResultsReviewCodeCode = {
  /**
   * microbiology results review task
   */
  MICRORREV: "MICRORREV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskMicrobiologyResultsReviewCodeCode =
  typeof ActTaskMicrobiologyResultsReviewCodeCode[keyof typeof ActTaskMicrobiologyResultsReviewCodeCode];
