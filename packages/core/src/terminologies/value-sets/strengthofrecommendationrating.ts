/**
 * A rating system that describes the strength of the recommendation, such as the GRADE, DynaMed, or HGPS systems.
 * http://hl7.org/fhir/ValueSet/recommendation-strength
 */
export const StrengthOfRecommendationRatingCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StrengthOfRecommendationRatingCode =
  typeof StrengthOfRecommendationRatingCode[keyof typeof StrengthOfRecommendationRatingCode];
