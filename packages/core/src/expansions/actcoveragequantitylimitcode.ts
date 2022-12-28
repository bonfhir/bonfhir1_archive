/**
 * Maximum amount paid or maximum number of services/products covered; or maximum amount or number covered during a specified time period under the policy or program.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageQuantityLimitCode
 */
export const ActCoverageQuantityLimitCodeCode = {
  /**
   * coverage period
   */
  COVPRD: "COVPRD",

  /**
   * Net Amount
   */
  NETAMT: "NETAMT",

  /**
   * Unit Price
   */
  UNITPRICE: "UNITPRICE",

  /**
   * Unit Quantity
   */
  UNITQTY: "UNITQTY",

  /**
   * ActCoverageQuantityLimitCode
   */
  _ActCoverageQuantityLimitCode: "_ActCoverageQuantityLimitCode",

  /**
   * life time maximum
   */
  LFEMX: "LFEMX",

  /**
   * period maximum
   */
  PRDMX: "PRDMX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageQuantityLimitCodeCode =
  typeof ActCoverageQuantityLimitCodeCode[keyof typeof ActCoverageQuantityLimitCodeCode];
