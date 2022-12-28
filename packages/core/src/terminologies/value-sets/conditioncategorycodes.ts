/**
 * Preferred value set for Condition Categories.
 * http://hl7.org/fhir/ValueSet/condition-category
 */
export const ConditionCategoryCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionCategoryCodesCode =
  typeof ConditionCategoryCodesCode[keyof typeof ConditionCategoryCodesCode];
