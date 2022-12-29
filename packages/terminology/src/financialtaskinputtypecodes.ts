/**
 * This value set includes Financial Task Input Type codes.
 * http://terminology.hl7.org/ValueSet/financial-taskinputtype
 */
export const FinancialTaskInputTypeCodesCode = {
  /**
   * Include
   */
  Include: "include",

  /**
   * Exclude
   */
  Exclude: "exclude",

  /**
   * Original Response
   */
  OriginalResponse: "origresponse",

  /**
   * Reference Number
   */
  ReferenceNumber: "reference",

  /**
   * Item Number
   */
  ItemNumber: "item",

  /**
   * Period
   */
  Period: "period",

  /**
   * Status code
   */
  Statuscode: "status",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FinancialTaskInputTypeCodesCode =
  typeof FinancialTaskInputTypeCodesCode[keyof typeof FinancialTaskInputTypeCodesCode];
