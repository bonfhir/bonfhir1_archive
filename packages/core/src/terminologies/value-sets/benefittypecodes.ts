/**
 * This value set includes a smattering of Benefit type codes.
 * http://hl7.org/fhir/ValueSet/benefit-type
 */
export const BenefitTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitTypeCodesCode =
  typeof BenefitTypeCodesCode[keyof typeof BenefitTypeCodesCode];
