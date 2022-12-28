/**
 * Example codes for grouping goals to use for filtering or presentation.
 * http://hl7.org/fhir/ValueSet/goal-category
 */
export const GoalCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalCategoryCode =
  typeof GoalCategoryCode[keyof typeof GoalCategoryCode];
