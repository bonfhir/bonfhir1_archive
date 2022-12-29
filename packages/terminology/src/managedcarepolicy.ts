/**
 * **Definition:** Government mandated program providing coverage, disability income, and vocational rehabilitation for injuries sustained in the work place or in the course of employment. Employers may either self-fund the program, purchase commercial coverage, or pay a premium to a government entity that administers the program. Employees may be required to pay premiums toward the cost of coverage as well.

Managed care policies specifically exclude coverage for losses insured under a disability policy, workers' compensation program, liability insurance (including automobile insurance); or for medical expenses, coverage for on-site medical clinics or for limited dental or vision benefits when these are provided under a separate policy.

*Discussion:* Managed care policies are offered by managed care plans that contract with selected providers or health care organizations to provide comprehensive health care at a discount to covered parties and coordinate the financing and delivery of health care. Managed care uses medical protocols and procedures agreed on by the medical profession to be cost effective, also known as medical practice guidelines. Providers are typically reimbursed for covered services by a capitated amount on a per member per month basis that may reflect difference in the health status and level of services anticipated to be needed by the member.
 * http://terminology.hl7.org/ValueSet/v3-ManagedCarePolicy
 */
export const ManagedCarePolicyCode = {
  /**
   * managed care policy
   */
  managedcarepolicy: "MCPOL",

  /**
   * point of service policy
   */
  pointofservicepolicy: "POS",

  /**
   * health maintenance organization policy
   */
  healthmaintenanceorganizationpolicy: "HMO",

  /**
   * preferred provider organization policy
   */
  preferredproviderorganizationpolicy: "PPO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ManagedCarePolicyCode =
  typeof ManagedCarePolicyCode[keyof typeof ManagedCarePolicyCode];
