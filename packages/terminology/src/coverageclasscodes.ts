/**
 * This value set includes Coverage Class codes.
 * http://terminology.hl7.org/ValueSet/coverage-class
 */
export const CoverageClassCodesCode = {
  /**
   * Group
   */
  group: "group",

  /**
   * SubGroup
   */
  subgroup: "subgroup",

  /**
   * Plan
   */
  plan: "plan",

  /**
   * SubPlan
   */
  subplan: "subplan",

  /**
   * Class
   */
  class: "class",

  /**
   * SubClass
   */
  subclass: "subclass",

  /**
   * Sequence
   */
  sequence: "sequence",

  /**
   * RX BIN
   */
  rxbin: "rxbin",

  /**
   * RX PCN
   */
  rxpcn: "rxpcn",

  /**
   * RX Id
   */
  rxid: "rxid",

  /**
   * RX Group
   */
  rxgroup: "rxgroup",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageClassCodesCode =
  typeof CoverageClassCodesCode[keyof typeof CoverageClassCodesCode];
