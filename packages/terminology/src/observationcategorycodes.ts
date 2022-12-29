/**
 * Observation Category codes.
 * http://terminology.hl7.org/ValueSet/observation-category
 */
export const ObservationCategoryCodesCode = {
  /**
   * Social History
   */
  SocialHistory: "social-history",

  /**
   * Vital Signs
   */
  VitalSigns: "vital-signs",

  /**
   * Imaging
   */
  Imaging: "imaging",

  /**
   * Laboratory
   */
  Laboratory: "laboratory",

  /**
   * Procedure
   */
  Procedure: "procedure",

  /**
   * Survey
   */
  Survey: "survey",

  /**
   * Exam
   */
  Exam: "exam",

  /**
   * Therapy
   */
  Therapy: "therapy",

  /**
   * Activity
   */
  Activity: "activity",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationCategoryCodesCode =
  typeof ObservationCategoryCodesCode[keyof typeof ObservationCategoryCodesCode];
