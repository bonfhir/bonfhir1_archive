/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/immunization-origin
 */
export const ImmunizationOriginCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationOriginCodesCode =
  typeof ImmunizationOriginCodesCode[keyof typeof ImmunizationOriginCodesCode];
