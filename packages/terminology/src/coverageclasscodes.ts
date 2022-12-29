/**
 * This value set includes Coverage Class codes.
 * http://terminology.hl7.org/ValueSet/coverage-class
 */
export const CoverageClassCodesCode = {
  /**
   * Group
   */
  Group: "group",

  /**
   * SubGroup
   */
  SubGroup: "subgroup",

  /**
   * Plan
   */
  Plan: "plan",

  /**
   * SubPlan
   */
  SubPlan: "subplan",

  /**
   * Class
   */
  Class: "class",

  /**
   * SubClass
   */
  SubClass: "subclass",

  /**
   * Sequence
   */
  Sequence: "sequence",

  /**
   * RX BIN
   */
  RXBIN: "rxbin",

  /**
   * RX PCN
   */
  RXPCN: "rxpcn",

  /**
   * RX Id
   */
  RXId: "rxid",

  /**
   * RX Group
   */
  RXGroup: "rxgroup",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageClassCodesCode =
  typeof CoverageClassCodesCode[keyof typeof CoverageClassCodesCode];
