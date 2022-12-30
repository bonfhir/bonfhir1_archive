/**
 * A non-mandated intent to perform an act where a level of professional responsibility is being accepted by making the proposal.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodRecommendation
 */
export const ActMoodRecommendationCode = {
  /**
   * recommendation
   */
  RMD: "RMD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodRecommendationCode =
  typeof ActMoodRecommendationCode[keyof typeof ActMoodRecommendationCode];
