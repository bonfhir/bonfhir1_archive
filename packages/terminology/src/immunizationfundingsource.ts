/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 * http://terminology.hl7.org/ValueSet/immunization-funding-source
 */
export const ImmunizationFundingSourceCode = {
  /**
   * Private
   */
  private: "private",

  /**
   * Public
   */
  public: "public",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ImmunizationFundingSourceCode =
  typeof ImmunizationFundingSourceCode[keyof typeof ImmunizationFundingSourceCode];
