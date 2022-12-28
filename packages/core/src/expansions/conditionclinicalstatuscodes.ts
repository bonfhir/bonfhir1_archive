/**
 * Preferred value set for Condition Clinical Status.
 * http://terminology.hl7.org/ValueSet/condition-clinical
 */
export const ConditionClinicalStatusCodesCode = {
  /**
   * Active
   */
  active: "active",

  /**
   * Inactive
   */
  inactive: "inactive",

  /**
   * Unknown
   */
  unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionClinicalStatusCodesCode =
  typeof ConditionClinicalStatusCodesCode[keyof typeof ConditionClinicalStatusCodesCode];
