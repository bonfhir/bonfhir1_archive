/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reasons why a given recommendation status is assigned. This value set is provided as a suggestive example and includes SNOMED CT concepts.
 * http://hl7.org/fhir/ValueSet/immunization-recommendation-reason
 */
export const ImmunizationRecommendationReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationRecommendationReasonCodesCode =
  typeof ImmunizationRecommendationReasonCodesCode[keyof typeof ImmunizationRecommendationReasonCodesCode];
