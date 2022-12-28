/**
 * Dose forms for a product as a whole, considering all individual parts, but before any mixing
 * http://hl7.org/fhir/ValueSet/combined-dose-form
 */
export const CombinedDoseFormCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CombinedDoseFormCode =
  typeof CombinedDoseFormCode[keyof typeof CombinedDoseFormCode];
