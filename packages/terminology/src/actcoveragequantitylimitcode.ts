/**
 * Maximum amount paid or maximum number of services/products covered; or maximum amount or number covered during a specified time period under the policy or program.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageQuantityLimitCode
 */
export const ActCoverageQuantityLimitCodeCode = {
  /**
   * coverage period
   */
  coverageperiod: "COVPRD",

  /**
   * Net Amount
   */
  NetAmount: "NETAMT",

  /**
   * Unit Price
   */
  UnitPrice: "UNITPRICE",

  /**
   * Unit Quantity
   */
  UnitQuantity: "UNITQTY",

  /**
   * ActCoverageQuantityLimitCode
   */
  ActCoverageQuantityLimitCode: "_ActCoverageQuantityLimitCode",

  /**
   * life time maximum
   */
  lifetimemaximum: "LFEMX",

  /**
   * period maximum
   */
  periodmaximum: "PRDMX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageQuantityLimitCodeCode =
  typeof ActCoverageQuantityLimitCodeCode[keyof typeof ActCoverageQuantityLimitCodeCode];
