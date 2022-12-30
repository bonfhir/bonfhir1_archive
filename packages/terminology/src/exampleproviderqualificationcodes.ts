/**
 * This value set includes sample Provider Qualification codes.
 * http://terminology.hl7.org/ValueSet/provider-qualification
 */
export const ExampleProviderQualificationCodesCode = {
  /**
   * Dentist
   */
  "311405": "311405",

  /**
   * Ophthalmologist
   */
  "604215": "604215",

  /**
   * Optometrist
   */
  "604210": "604210",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleProviderQualificationCodesCode =
  typeof ExampleProviderQualificationCodesCode[keyof typeof ExampleProviderQualificationCodesCode];
