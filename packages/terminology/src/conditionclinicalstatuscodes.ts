/**
 * Preferred value set for Condition Clinical Status.
 * http://terminology.hl7.org/ValueSet/condition-clinical
 */
export const ConditionClinicalStatusCodesCode = {
  /**
   * Active
   */
  Active: "active",

  /**
   * Recurrence
   */
  Recurrence: "recurrence",

  /**
   * Relapse
   */
  Relapse: "relapse",

  /**
   * Inactive
   */
  Inactive: "inactive",

  /**
   * Remission
   */
  Remission: "remission",

  /**
   * Resolved
   */
  Resolved: "resolved",

  /**
   * Unknown
   */
  Unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionClinicalStatusCodesCode =
  typeof ConditionClinicalStatusCodesCode[keyof typeof ConditionClinicalStatusCodesCode];
