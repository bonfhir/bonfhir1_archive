/**
 * A rating system that describes the strength of the recommendation, such as the GRADE, DynaMed, or HGPS systems.
 * http://terminology.hl7.org/ValueSet/recommendation-strength
 */
export const StrengthOfRecommendationRatingCode = {
  /**
   * Strong
   */
  strong: "strong",

  /**
   * Weak
   */
  weak: "weak",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StrengthOfRecommendationRatingCode =
  typeof StrengthOfRecommendationRatingCode[keyof typeof StrengthOfRecommendationRatingCode];
