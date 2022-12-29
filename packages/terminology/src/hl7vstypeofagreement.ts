/**
 * Concepts which specify codes to further identify an insurance plan.
 * http://terminology.hl7.org/ValueSet/v2-0098
 */
export const Hl7VSTypeOfAgreementCode = {
  /**
   * Standard
   */
  Standard: "S",

  /**
   * Unified
   */
  Unified: "U",

  /**
   * Maternity
   */
  Maternity: "M",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTypeOfAgreementCode =
  typeof Hl7VSTypeOfAgreementCode[keyof typeof Hl7VSTypeOfAgreementCode];
