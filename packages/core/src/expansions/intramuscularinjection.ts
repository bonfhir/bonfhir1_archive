/**
 * Injection, intramuscular
 * http://terminology.hl7.org/ValueSet/v3-IntramuscularInjection
 */
export const IntramuscularInjectionCode = {
  /**
   * Injection, intramuscular
   */
  IM: "IM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntramuscularInjectionCode =
  typeof IntramuscularInjectionCode[keyof typeof IntramuscularInjectionCode];
