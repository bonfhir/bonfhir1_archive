/**
 * Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceOverrideCode
 */
export const ActInvoiceOverrideCodeCode = {
  /**
   * coverage problem
   */
  COVGE: "COVGE",

  /**
   * electronic form to follow
   */
  EFORM: "EFORM",

  /**
   * fax to follow
   */
  FAX: "FAX",

  /**
   * good faith indicator
   */
  GFTH: "GFTH",

  /**
   * late invoice
   */
  LATE: "LATE",

  /**
   * manual review
   */
  MANUAL: "MANUAL",

  /**
   * out of jurisdiction
   */
  OOJ: "OOJ",

  /**
   * orthodontic service
   */
  ORTHO: "ORTHO",

  /**
   * paper documentation to follow
   */
  PAPER: "PAPER",

  /**
   * public insurance exhausted
   */
  PIE: "PIE",

  /**
   * delayed by a previous payor
   */
  PYRDELAY: "PYRDELAY",

  /**
   * referral not required
   */
  REFNR: "REFNR",

  /**
   * repeated service
   */
  REPSERV: "REPSERV",

  /**
   * unrelated service
   */
  UNRELAT: "UNRELAT",

  /**
   * verbal authorization
   */
  VERBAUTH: "VERBAUTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceOverrideCodeCode =
  typeof ActInvoiceOverrideCodeCode[keyof typeof ActInvoiceOverrideCodeCode];
