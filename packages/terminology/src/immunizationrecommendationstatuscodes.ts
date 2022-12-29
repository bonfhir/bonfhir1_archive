/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/ValueSet/immunization-recommendation-status
 */
export const ImmunizationRecommendationStatusCodesCode = {
  /**
   * Due
   */
  Due: "due",

  /**
   * Overdue
   */
  Overdue: "overdue",

  /**
   * Immune
   */
  Immune: "immune",

  /**
   * Contraindicated
   */
  Contraindicated: "contraindicated",

  /**
   * Complete
   */
  Complete: "complete",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationRecommendationStatusCodesCode =
  typeof ImmunizationRecommendationStatusCodesCode[keyof typeof ImmunizationRecommendationStatusCodesCode];
