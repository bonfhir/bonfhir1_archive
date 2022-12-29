/**
 * The type of provision(s) made for reimbursing for the deliver of healthcare services and/or goods provided by a Provider, over a specified period.
 * http://terminology.hl7.org/ValueSet/v3-ActBillingArrangementCode
 */
export const ActBillingArrangementCodeCode = {
  /**
   * block funding
   */
  blockfunding: "BLK",

  /**
   * capitation funding
   */
  capitationfunding: "CAP",

  /**
   * contract funding
   */
  contractfunding: "CONTF",

  /**
   * financial
   */
  financial: "FINBILL",

  /**
   * roster funding
   */
  rosterfunding: "ROST",

  /**
   * sessional funding
   */
  sessionalfunding: "SESS",

  /**
   * fee for service
   */
  feeforservice: "FFS",

  /**
   * first fill, part fill, partial strength
   */
  firstfillpartfillpartialstrength: "FFPS",

  /**
   * first fill complete, partial strength
   */
  firstfillcompletepartialstrength: "FFCS",

  /**
   * trial fill partial strength
   */
  trialfillpartialstrength: "TFS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActBillingArrangementCodeCode =
  typeof ActBillingArrangementCodeCode[keyof typeof ActBillingArrangementCodeCode];
