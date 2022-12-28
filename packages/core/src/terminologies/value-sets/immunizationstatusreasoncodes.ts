/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the reason why a dose of vaccine was not administered. This value set is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/immunization-status-reason
 */
export const ImmunizationStatusReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationStatusReasonCodesCode =
  typeof ImmunizationStatusReasonCodesCode[keyof typeof ImmunizationStatusReasonCodesCode];
