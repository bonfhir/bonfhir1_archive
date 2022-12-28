/**
 * This value set includes Financial Task Input Type codes.
 * http://terminology.hl7.org/ValueSet/financial-taskinputtype
 */
export const FinancialTaskInputTypeCodesCode = {
  /**
   * Include
   */
  include: "include",

  /**
   * Exclude
   */
  exclude: "exclude",

  /**
   * Original Response
   */
  origresponse: "origresponse",

  /**
   * Reference Number
   */
  reference: "reference",

  /**
   * Item Number
   */
  item: "item",

  /**
   * Period
   */
  period: "period",

  /**
   * Status code
   */
  status: "status",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FinancialTaskInputTypeCodesCode =
  typeof FinancialTaskInputTypeCodesCode[keyof typeof FinancialTaskInputTypeCodesCode];
