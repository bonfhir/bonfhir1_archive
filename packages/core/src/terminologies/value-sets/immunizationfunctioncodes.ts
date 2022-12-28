/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the function a practitioner or organization may play in the immunization event. This value set is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/immunization-function
 */
export const ImmunizationFunctionCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationFunctionCodesCode =
  typeof ImmunizationFunctionCodesCode[keyof typeof ImmunizationFunctionCodesCode];
