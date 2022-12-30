/**
 * **Definition:** An insurance policy for losses sustained in an automobile accident that typically covers losses incurred by the named insured and parties who may be claimants for losses, such as pedestrians and passengers.
 * http://terminology.hl7.org/ValueSet/v3-AutomobileInsurancePolicy
 */
export const AutomobileInsurancePolicyCode = {
  /**
   * automobile
   */
  AUTOPOL: "AUTOPOL",

  /**
   * collision coverage policy
   */
  COL: "COL",

  /**
   * uninsured motorist policy
   */
  UNINSMOT: "UNINSMOT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AutomobileInsurancePolicyCode =
  typeof AutomobileInsurancePolicyCode[keyof typeof AutomobileInsurancePolicyCode];
