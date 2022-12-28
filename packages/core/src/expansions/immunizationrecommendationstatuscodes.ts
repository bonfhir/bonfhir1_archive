/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient towards perceived immunity against a vaccine preventable disease. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/ValueSet/immunization-recommendation-status
 */
export const ImmunizationRecommendationStatusCodesCode = {
  /**
   * Due
   */
  due: "due",

  /**
   * Overdue
   */
  overdue: "overdue",

  /**
   * Immune
   */
  immune: "immune",

  /**
   * Contraindicated
   */
  contraindicated: "contraindicated",

  /**
   * Complete
   */
  complete: "complete",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationRecommendationStatusCodesCode =
  typeof ImmunizationRecommendationStatusCodesCode[keyof typeof ImmunizationRecommendationStatusCodesCode];
