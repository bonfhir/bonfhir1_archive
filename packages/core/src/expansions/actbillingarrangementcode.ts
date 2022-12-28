/**
 * The type of provision(s) made for reimbursing for the deliver of healthcare services and/or goods provided by a Provider, over a specified period.
 * http://terminology.hl7.org/ValueSet/v3-ActBillingArrangementCode
 */
export const ActBillingArrangementCodeCode = {
  /**
   * block funding
   */
  BLK: "BLK",

  /**
   * capitation funding
   */
  CAP: "CAP",

  /**
   * contract funding
   */
  CONTF: "CONTF",

  /**
   * financial
   */
  FINBILL: "FINBILL",

  /**
   * roster funding
   */
  ROST: "ROST",

  /**
   * sessional funding
   */
  SESS: "SESS",

  /**
   * fee for service
   */
  FFS: "FFS",

  /**
   * first fill, part fill, partial strength
   */
  FFPS: "FFPS",

  /**
   * first fill complete, partial strength
   */
  FFCS: "FFCS",

  /**
   * trial fill partial strength
   */
  TFS: "TFS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActBillingArrangementCodeCode =
  typeof ActBillingArrangementCodeCode[keyof typeof ActBillingArrangementCodeCode];
