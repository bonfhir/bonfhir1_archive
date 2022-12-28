/**
 * This value set includes Financial Task codes.
 * http://terminology.hl7.org/ValueSet/financial-taskcode
 */
export const FinancialTaskCodesCode = {
  /**
   * Cancel
   */
  cancel: "cancel",

  /**
   * Poll
   */
  poll: "poll",

  /**
   * Release
   */
  release: "release",

  /**
   * Reprocess
   */
  reprocess: "reprocess",

  /**
   * Status check
   */
  status: "status",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FinancialTaskCodesCode =
  typeof FinancialTaskCodesCode[keyof typeof FinancialTaskCodesCode];
