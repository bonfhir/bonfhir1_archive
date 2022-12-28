/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the disease targeted by a vaccination recommendation. This value set is provided as a suggestive example and includes the SNOMED CT concepts from the 64572001 (Disease) hierarchy.
 * http://hl7.org/fhir/ValueSet/immunization-recommendation-target-disease
 */
export const ImmunizationRecommendationTargetDiseaseCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationRecommendationTargetDiseaseCodesCode =
  typeof ImmunizationRecommendationTargetDiseaseCodesCode[keyof typeof ImmunizationRecommendationTargetDiseaseCodesCode];
