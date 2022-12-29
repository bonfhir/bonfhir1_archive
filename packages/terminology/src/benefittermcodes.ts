/**
 * This value set includes a smattering of Benefit Term codes.
 * http://terminology.hl7.org/ValueSet/benefit-term
 */
export const BenefitTermCodesCode = {
  /**
   * Annual
   */
  Annual: "annual",

  /**
   * Day
   */
  Day: "day",

  /**
   * Lifetime
   */
  Lifetime: "lifetime",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitTermCodesCode =
  typeof BenefitTermCodesCode[keyof typeof BenefitTermCodesCode];
