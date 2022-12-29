/**
 * Value Set of codes that specify the method in which a subject provides consent.
 * http://terminology.hl7.org/ValueSet/v2-0497
 */
export const Hl7VSConsentModeCode = {
  /**
   * Verbal
   */
  Verbal: "V",

  /**
   * Written
   */
  Written: "W",

  /**
   * Telephone
   */
  Telephone: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSConsentModeCode =
  typeof Hl7VSConsentModeCode[keyof typeof Hl7VSConsentModeCode];
