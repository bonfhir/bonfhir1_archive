/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was administered. This value set is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/immunization-reason
 */
export const ImmunizationReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationReasonCodesCode =
  typeof ImmunizationReasonCodesCode[keyof typeof ImmunizationReasonCodesCode];
