/**
 * Criteria that are applicable to the authorized coverage.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageLimitCode
 */
export const ActCoverageLimitCodeCode = {
  /**
   * ActCoverageQuantityLimitCode
   */
  ActCoverageQuantityLimitCode: "_ActCoverageQuantityLimitCode",

  /**
   * coverage period
   */
  coverageperiod: "COVPRD",

  /**
   * life time maximum
   */
  lifetimemaximum: "LFEMX",

  /**
   * Net Amount
   */
  NetAmount: "NETAMT",

  /**
   * period maximum
   */
  periodmaximum: "PRDMX",

  /**
   * Unit Price
   */
  UnitPrice: "UNITPRICE",

  /**
   * Unit Quantity
   */
  UnitQuantity: "UNITQTY",

  /**
   * coverage maximum
   */
  coveragemaximum: "COVMX",

  /**
   * ActCoveredPartyLimitCode
   */
  ActCoveredPartyLimitCode: "_ActCoveredPartyLimitCode",

  /**
   * ActCoveragePartyLimitGroupCode
   */
  ActCoveragePartyLimitGroupCode: "_ActCoveragePartyLimitGroupCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageLimitCodeCode =
  typeof ActCoverageLimitCodeCode[keyof typeof ActCoverageLimitCodeCode];
