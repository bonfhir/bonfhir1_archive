/**
 * Preferred value set for Condition Categories.
 * http://terminology.hl7.org/ValueSet/condition-category
 */
export const ConditionCategoryCodesCode = {
  /**
   * Problem List Item
   */
  "problem-list-item": "problem-list-item",

  /**
   * Encounter Diagnosis
   */
  "encounter-diagnosis": "encounter-diagnosis",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionCategoryCodesCode =
  typeof ConditionCategoryCodesCode[keyof typeof ConditionCategoryCodesCode];
