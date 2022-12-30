/**
 * Value Set of codes that specify how provider services are billed.
 * http://terminology.hl7.org/ValueSet/v2-0187
 */
export const Hl7VSProviderBillingCode = {
  /**
   * Institution bills for provider
   */
  I: "I",

  /**
   * Provider does own billing
   */
  P: "P",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProviderBillingCode =
  typeof Hl7VSProviderBillingCode[keyof typeof Hl7VSProviderBillingCode];
