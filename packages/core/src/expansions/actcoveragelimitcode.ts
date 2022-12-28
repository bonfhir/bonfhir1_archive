/**
 * Criteria that are applicable to the authorized coverage.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageLimitCode
 */
export const ActCoverageLimitCodeCode = {
  /**
   * ActCoverageQuantityLimitCode
   */
  _ActCoverageQuantityLimitCode: "_ActCoverageQuantityLimitCode",

  /**
   * coverage period
   */
  COVPRD: "COVPRD",

  /**
   * life time maximum
   */
  LFEMX: "LFEMX",

  /**
   * Net Amount
   */
  NETAMT: "NETAMT",

  /**
   * period maximum
   */
  PRDMX: "PRDMX",

  /**
   * Unit Price
   */
  UNITPRICE: "UNITPRICE",

  /**
   * Unit Quantity
   */
  UNITQTY: "UNITQTY",

  /**
   * coverage maximum
   */
  COVMX: "COVMX",

  /**
   * ActCoveredPartyLimitCode
   */
  _ActCoveredPartyLimitCode: "_ActCoveredPartyLimitCode",

  /**
   * ActCoveragePartyLimitGroupCode
   */
  _ActCoveragePartyLimitGroupCode: "_ActCoveragePartyLimitGroupCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageLimitCodeCode =
  typeof ActCoverageLimitCodeCode[keyof typeof ActCoverageLimitCodeCode];
