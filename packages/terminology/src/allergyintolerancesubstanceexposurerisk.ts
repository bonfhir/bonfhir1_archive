/**
 * The risk of an adverse reaction (allergy or intolerance) for this patient upon exposure to the substance (including pharmaceutical products).
 * http://terminology.hl7.org/ValueSet/allerg-intol-substance-exp-risk
 */
export const AllergyIntoleranceSubstanceExposureRiskCode = {
  /**
   * Known Reaction Risk
   */
  KnownReactionRisk: "known-reaction-risk",

  /**
   * No Known Reaction Risk
   */
  NoKnownReactionRisk: "no-known-reaction-risk",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceSubstanceExposureRiskCode =
  typeof AllergyIntoleranceSubstanceExposureRiskCode[keyof typeof AllergyIntoleranceSubstanceExposureRiskCode];
