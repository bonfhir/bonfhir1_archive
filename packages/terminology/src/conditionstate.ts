/**
 * Enumeration indicating whether the condition is currently active, inactive, or has been resolved.
 * http://terminology.hl7.org/ValueSet/condition-state
 */
export const ConditionStateCode = {
  /**
   * Active
   */
  active: "active",

  /**
   * Inactive
   */
  inactive: "inactive",

  /**
   * Resolved
   */
  resolved: "resolved",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionStateCode =
  typeof ConditionStateCode[keyof typeof ConditionStateCode];
