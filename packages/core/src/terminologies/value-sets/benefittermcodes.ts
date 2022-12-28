/**
 * This value set includes a smattering of Benefit Term codes.
 * http://hl7.org/fhir/ValueSet/benefit-term
 */
export const BenefitTermCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitTermCodesCode =
  typeof BenefitTermCodesCode[keyof typeof BenefitTermCodesCode];
