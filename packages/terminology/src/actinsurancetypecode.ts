/**
 * **Definition:** Set of codes indicating the type of insurance policy. Insurance, in law and economics, is a form of risk management primarily used to hedge against the risk of potential financial loss. Insurance is defined as the equitable transfer of the risk of a potential loss, from one entity to another, in exchange for a premium and duty of care. A policy holder is an individual or an organization enters into a contract with an underwriter which stipulates that, in exchange for payment of a sum of money (a premium), one or more covered parties (insureds) is guaranteed compensation for losses resulting from certain perils under specified conditions. The underwriter analyzes the risk of loss, makes a decision as to whether the risk is insurable, and prices the premium accordingly. A policy provides benefits that indemnify or cover the cost of a loss incurred by a covered party, and may include coverage for services required to remediate a loss. An insurance policy contains pertinent facts about the policy holder, the insurance coverage, the covered parties, and the insurer. A policy may include exemptions and provisions specifying the extent to which the indemnification clause cannot be enforced for intentional tortious conduct of a covered party, e.g., whether the covered parties are jointly or severably insured.

*Discussion:* In contrast to programs, an insurance policy has one or more policy holders, who own the policy. The policy holder may be the covered party, a relative of the covered party, a partnership, or a corporation, e.g., an employer. A subscriber of a self-insured health insurance policy is a policy holder. A subscriber of an employer sponsored health insurance policy is holds a certificate of coverage, but is not a policy holder; the policy holder is the employer. See CoveredRoleType.
 * http://terminology.hl7.org/ValueSet/v3-ActInsuranceTypeCode
 */
export const ActInsuranceTypeCodeCode = {
  /**
   * ActInsuranceTypeCode
   */
  _ActInsuranceTypeCode: "_ActInsuranceTypeCode",

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
   * extended healthcare
   */
  EHCPOL: "EHCPOL",

  /**
   * health insurance plan policy
   */
  HIP: "HIP",

  /**
   * health spending account
   */
  HSAPOL: "HSAPOL",

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

  /**
   * disability insurance policy
   */
  DIS: "DIS",

  /**
   * employee welfare benefit plan policy
   */
  EWB: "EWB",

  /**
   * flexible benefit plan policy
   */
  FLEXP: "FLEXP",

  /**
   * life insurance policy
   */
  LIFE: "LIFE",

  /**
   * annuity policy
   */
  ANNU: "ANNU",

  /**
   * term life insurance policy
   */
  TLIFE: "TLIFE",

  /**
   * universal life insurance policy
   */
  ULIFE: "ULIFE",

  /**
   * property and casualty insurance policy
   */
  PNC: "PNC",

  /**
   * reinsurance policy
   */
  REI: "REI",

  /**
   * surplus line insurance policy
   */
  SURPL: "SURPL",

  /**
   * umbrella liability insurance policy
   */
  UMBRL: "UMBRL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInsuranceTypeCodeCode =
  typeof ActInsuranceTypeCodeCode[keyof typeof ActInsuranceTypeCodeCode];
