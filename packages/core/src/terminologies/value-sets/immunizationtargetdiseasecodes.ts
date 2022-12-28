/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the disease that the dose is being administered against. This value set is provided as a suggestive example and includes the SNOMED CT concepts from the 64572001 (Disease) hierarchy.
 * http://hl7.org/fhir/ValueSet/immunization-target-disease
 */
export const ImmunizationTargetDiseaseCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationTargetDiseaseCodesCode =
  typeof ImmunizationTargetDiseaseCodesCode[keyof typeof ImmunizationTargetDiseaseCodesCode];
