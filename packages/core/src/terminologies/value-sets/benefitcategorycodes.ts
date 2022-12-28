/**
 * This value set includes examples of Benefit Category codes.
 * http://hl7.org/fhir/ValueSet/ex-benefitcategory
 */
export const BenefitCategoryCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitCategoryCodesCode =
  typeof BenefitCategoryCodesCode[keyof typeof BenefitCategoryCodesCode];
