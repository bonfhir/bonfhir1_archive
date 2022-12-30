/**
 * Example codes for grouping goals to use for filtering or presentation.
 * http://terminology.hl7.org/ValueSet/goal-category
 */
export const GoalCategoryCode = {
  /**
   * Dietary
   */
  dietary: "dietary",

  /**
   * Safety
   */
  safety: "safety",

  /**
   * Behavioral
   */
  behavioral: "behavioral",

  /**
   * Nursing
   */
  nursing: "nursing",

  /**
   * Physiotherapy
   */
  physiotherapy: "physiotherapy",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalCategoryCode =
  typeof GoalCategoryCode[keyof typeof GoalCategoryCode];
