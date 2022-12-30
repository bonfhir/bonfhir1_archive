/**
 * **Definition:** Set of codes indicating the type of health insurance policy that covers health services provided to covered parties. A health insurance policy is a written contract for insurance between the insurance company and the policyholder, and contains pertinent facts about the policy owner (the policy holder), the health insurance coverage, the insured subscribers and dependents, and the insurer. Health insurance is typically administered in accordance with a plan, which specifies (1) the type of health services and health conditions that will be covered under what circumstances (e.g., exclusion of a pre-existing condition, service must be deemed medically necessary; service must not be experimental; service must provided in accordance with a protocol; drug must be on a formulary; service must be prior authorized; or be a referral from a primary care provider); (2) the type and affiliation of providers (e.g., only allopathic physicians, only in network, only providers employed by an HMO); (3) financial participations required of covered parties (e.g., co-pays, coinsurance, deductibles, out-of-pocket); and (4) the manner in which services will be paid (e.g., under indemnity or fee-for-service health plans, the covered party typically pays out-of-pocket and then file a claim for reimbursement, while health plans that have contractual relationships with providers, i.e., network providers, typically do not allow the providers to bill the covered party for the cost of the service until after filing a claim with the payer and receiving reimbursement).
 * http://terminology.hl7.org/ValueSet/v3-ActHealthInsuranceTypeCode
 */
export const ActHealthInsuranceTypeCodeCode = {
  /**
   * extended healthcare
   */
  EHCPOL: "EHCPOL",

  /**
   * health spending account
   */
  HSAPOL: "HSAPOL",

  /**
   * ActHealthInsuranceTypeCode
   */
  _ActHealthInsuranceTypeCode: "_ActHealthInsuranceTypeCode",

  /**
   * dental care policy
   */
  DENTAL: "DENTAL",

  /**
   * disease specific policy
   */
  DISEASE: "DISEASE",

  /**
   * drug policy
   */
  DRUGPOL: "DRUGPOL",

  /**
   * health insurance plan policy
   */
  HIP: "HIP",

  /**
   * long term care policy
   */
  LTC: "LTC",

  /**
   * managed care policy
   */
  MCPOL: "MCPOL",

  /**
   * point of service policy
   */
  POS: "POS",

  /**
   * health maintenance organization policy
   */
  HMO: "HMO",

  /**
   * preferred provider organization policy
   */
  PPO: "PPO",

  /**
   * mental health policy
   */
  MENTPOL: "MENTPOL",

  /**
   * substance use policy
   */
  SUBPOL: "SUBPOL",

  /**
   * vision care policy
   */
  VISPOL: "VISPOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActHealthInsuranceTypeCodeCode =
  typeof ActHealthInsuranceTypeCodeCode[keyof typeof ActHealthInsuranceTypeCodeCode];
