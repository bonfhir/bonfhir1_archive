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
   * Recurrence
   */
  recurrence: "recurrence",

  /**
   * Relapse
   */
  relapse: "relapse",

  /**
   * Inactive
   */
  inactive: "inactive",

  /**
   * Remission
   */
  remission: "remission",

  /**
   * Resolved
   */
  resolved: "resolved",

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
