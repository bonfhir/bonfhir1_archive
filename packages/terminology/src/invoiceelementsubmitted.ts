/**
 * Total counts and total net amounts billed for all Invoice Groupings that were submitted within a time period. Adjudicated invoice elements are included.
 * http://terminology.hl7.org/ValueSet/v3-InvoiceElementSubmitted
 */
export const InvoiceElementSubmittedCode = {
  /**
   * submitted billed electronic amount
   */
  SBBLELAT: "SBBLELAT",

  /**
   * submitted billed electronic amount
   */
  SBBLAT: "SBBLAT",

  /**
   * submitted billed electronic count
   */
  SBBLELCT: "SBBLELCT",

  /**
   * submitted billed electronic count
   */
  SBBLCT: "SBBLCT",

  /**
   * submitted nullified electronic amount
   */
  SBNFELAT: "SBNFELAT",

  /**
   * submitted nullified electronic amount
   */
  SBCNAT: "SBCNAT",

  /**
   * submitted cancelled electronic count
   */
  SBNFELCT: "SBNFELCT",

  /**
   * submitted cancelled electronic count
   */
  SBCNCT: "SBCNCT",

  /**
   * submitted pending electronic amount
   */
  SBPDELAT: "SBPDELAT",

  /**
   * submitted pending electronic amount
   */
  SBPDAT: "SBPDAT",

  /**
   * submitted pending electronic count
   */
  SBPDELCT: "SBPDELCT",

  /**
   * submitted pending electronic count
   */
  SBPDCT: "SBPDCT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InvoiceElementSubmittedCode =
  typeof InvoiceElementSubmittedCode[keyof typeof InvoiceElementSubmittedCode];
