/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 * http://terminology.hl7.org/ValueSet/adjudication
 */
export const AdjudicationValueCodesCode = {
  /**
   * Submitted Amount
   */
  SubmittedAmount: "submitted",

  /**
   * CoPay
   */
  CoPay: "copay",

  /**
   * Eligible Amount
   */
  EligibleAmount: "eligible",

  /**
   * Deductible
   */
  Deductible: "deductible",

  /**
   * Unallocated Deductible
   */
  UnallocatedDeductible: "unallocdeduct",

  /**
   * Eligible %
   */
  Eligible: "eligpercent",

  /**
   * Tax
   */
  Tax: "tax",

  /**
   * Benefit Amount
   */
  BenefitAmount: "benefit",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdjudicationValueCodesCode =
  typeof AdjudicationValueCodesCode[keyof typeof AdjudicationValueCodesCode];
