/**
 * This value set includes a smattering of Adjudication Value codes which includes codes to indicate the amounts eligible under the plan, the amount of benefit, copays etc.
 * http://terminology.hl7.org/ValueSet/adjudication
 */
export const AdjudicationValueCodesCode = {
  /**
   * Submitted Amount
   */
  submitted: "submitted",

  /**
   * CoPay
   */
  copay: "copay",

  /**
   * Eligible Amount
   */
  eligible: "eligible",

  /**
   * Deductible
   */
  deductible: "deductible",

  /**
   * Unallocated Deductible
   */
  unallocdeduct: "unallocdeduct",

  /**
   * Eligible %
   */
  eligpercent: "eligpercent",

  /**
   * Tax
   */
  tax: "tax",

  /**
   * Benefit Amount
   */
  benefit: "benefit",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdjudicationValueCodesCode =
  typeof AdjudicationValueCodesCode[keyof typeof AdjudicationValueCodesCode];
