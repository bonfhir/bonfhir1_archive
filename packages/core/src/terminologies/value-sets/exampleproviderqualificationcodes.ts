/**
 * This value set includes sample Provider Qualification codes.
 * http://hl7.org/fhir/ValueSet/provider-qualification
 */
export const ExampleProviderQualificationCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleProviderQualificationCodesCode =
  typeof ExampleProviderQualificationCodesCode[keyof typeof ExampleProviderQualificationCodesCode];
