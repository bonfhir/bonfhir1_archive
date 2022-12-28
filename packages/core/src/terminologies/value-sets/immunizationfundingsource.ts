/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 * http://hl7.org/fhir/ValueSet/immunization-funding-source
 */
export const ImmunizationFundingSourceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationFundingSourceCode =
  typeof ImmunizationFundingSourceCode[keyof typeof ImmunizationFundingSourceCode];
