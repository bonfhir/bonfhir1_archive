/**
 * Observation Category codes.
 * http://terminology.hl7.org/ValueSet/observation-category
 */
export const ObservationCategoryCodesCode = {
  /**
   * Social History
   */
  "social-history": "social-history",

  /**
   * Vital Signs
   */
  "vital-signs": "vital-signs",

  /**
   * Imaging
   */
  imaging: "imaging",

  /**
   * Laboratory
   */
  laboratory: "laboratory",

  /**
   * Procedure
   */
  procedure: "procedure",

  /**
   * Survey
   */
  survey: "survey",

  /**
   * Exam
   */
  exam: "exam",

  /**
   * Therapy
   */
  therapy: "therapy",

  /**
   * Activity
   */
  activity: "activity",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationCategoryCodesCode =
  typeof ObservationCategoryCodesCode[keyof typeof ObservationCategoryCodesCode];
