/**
 * Value Set of codes used to specify the tax status of a provider.
 * http://terminology.hl7.org/ValueSet/v2-0572
 */
export const Hl7VSTaxStatusCode = {
  /**
   * Registered in VAT register
   */
  RVAT: "RVAT",

  /**
   * Unregistered in VAT register
   */
  UVAT: "UVAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTaxStatusCode =
  typeof Hl7VSTaxStatusCode[keyof typeof Hl7VSTaxStatusCode];
