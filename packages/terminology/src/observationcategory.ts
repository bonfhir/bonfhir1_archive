/**
 * High level observation categories for the general type of observation being made.

*Steward:* OO WG
 * http://terminology.hl7.org/ValueSet/v3-ObservationCategory
 */
export const ObservationCategoryCode = {
  /**
   * Exam
   */
  Exam: "exam",

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
   * Social History
   */
  SocialHistory: "social-history",

  /**
   * Survey
   */
  Survey: "survey",

  /**
   * Therapy
   */
  Therapy: "therapy",

  /**
   * Vital Signs
   */
  VitalSigns: "vital-signs",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationCategoryCode =
  typeof ObservationCategoryCode[keyof typeof ObservationCategoryCode];
