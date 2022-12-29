/**
 * **Definition:** An insurance policy for losses sustained in an automobile accident that typically covers losses incurred by the named insured and parties who may be claimants for losses, such as pedestrians and passengers.
 * http://terminology.hl7.org/ValueSet/v3-AutomobileInsurancePolicy
 */
export const AutomobileInsurancePolicyCode = {
  /**
   * automobile
   */
  automobile: "AUTOPOL",

  /**
   * collision coverage policy
   */
  collisioncoveragepolicy: "COL",

  /**
   * uninsured motorist policy
   */
  uninsuredmotoristpolicy: "UNINSMOT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AutomobileInsurancePolicyCode =
  typeof AutomobileInsurancePolicyCode[keyof typeof AutomobileInsurancePolicyCode];
