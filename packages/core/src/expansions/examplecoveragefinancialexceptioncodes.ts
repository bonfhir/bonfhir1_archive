/**
 * This value set includes Example Coverage Financial Exception Codes.
 * http://terminology.hl7.org/ValueSet/coverage-financial-exception
 */
export const ExampleCoverageFinancialExceptionCodesCode = {
  /**
   * Retired
   */
  retired: "retired",

  /**
   * Foster child
   */
  foster: "foster",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleCoverageFinancialExceptionCodesCode =
  typeof ExampleCoverageFinancialExceptionCodesCode[keyof typeof ExampleCoverageFinancialExceptionCodesCode];
