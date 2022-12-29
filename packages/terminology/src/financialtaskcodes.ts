/**
 * This value set includes Financial Task codes.
 * http://terminology.hl7.org/ValueSet/financial-taskcode
 */
export const FinancialTaskCodesCode = {
  /**
   * Cancel
   */
  Cancel: "cancel",

  /**
   * Poll
   */
  Poll: "poll",

  /**
   * Release
   */
  Release: "release",

  /**
   * Reprocess
   */
  Reprocess: "reprocess",

  /**
   * Status check
   */
  Statuscheck: "status",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FinancialTaskCodesCode =
  typeof FinancialTaskCodesCode[keyof typeof FinancialTaskCodesCode];
