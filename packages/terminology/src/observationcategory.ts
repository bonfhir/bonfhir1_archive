/**
 * High level observation categories for the general type of observation being made.

*Steward:* OO WG
 * http://terminology.hl7.org/ValueSet/v3-ObservationCategory
 */
export const ObservationCategoryCode = {
  /**
   * Exam
   */
  exam: "exam",

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
   * Social History
   */
  "social-history": "social-history",

  /**
   * Survey
   */
  survey: "survey",

  /**
   * Therapy
   */
  therapy: "therapy",

  /**
   * Vital Signs
   */
  "vital-signs": "vital-signs",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationCategoryCode =
  typeof ObservationCategoryCode[keyof typeof ObservationCategoryCode];
