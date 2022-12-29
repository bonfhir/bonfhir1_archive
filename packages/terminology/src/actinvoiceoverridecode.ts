/**
 * Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceOverrideCode
 */
export const ActInvoiceOverrideCodeCode = {
  /**
   * coverage problem
   */
  coverageproblem: "COVGE",

  /**
   * electronic form to follow
   */
  electronicformtofollow: "EFORM",

  /**
   * fax to follow
   */
  faxtofollow: "FAX",

  /**
   * good faith indicator
   */
  goodfaithindicator: "GFTH",

  /**
   * late invoice
   */
  lateinvoice: "LATE",

  /**
   * manual review
   */
  manualreview: "MANUAL",

  /**
   * out of jurisdiction
   */
  outofjurisdiction: "OOJ",

  /**
   * orthodontic service
   */
  orthodonticservice: "ORTHO",

  /**
   * paper documentation to follow
   */
  paperdocumentationtofollow: "PAPER",

  /**
   * public insurance exhausted
   */
  publicinsuranceexhausted: "PIE",

  /**
   * delayed by a previous payor
   */
  delayedbyapreviouspayor: "PYRDELAY",

  /**
   * referral not required
   */
  referralnotrequired: "REFNR",

  /**
   * repeated service
   */
  repeatedservice: "REPSERV",

  /**
   * unrelated service
   */
  unrelatedservice: "UNRELAT",

  /**
   * verbal authorization
   */
  verbalauthorization: "VERBAUTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceOverrideCodeCode =
  typeof ActInvoiceOverrideCodeCode[keyof typeof ActInvoiceOverrideCodeCode];
