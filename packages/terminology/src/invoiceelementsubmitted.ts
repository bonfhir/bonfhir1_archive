/**
 * Total counts and total net amounts billed for all Invoice Groupings that were submitted within a time period. Adjudicated invoice elements are included.
 * http://terminology.hl7.org/ValueSet/v3-InvoiceElementSubmitted
 */
export const InvoiceElementSubmittedCode = {
  /**
   * submitted billed electronic amount
   */
  submittedbilledelectronicamount: "SBBLELAT",

  /**
   * submitted billed electronic amount
   */
  submittedbilledelectronicamount: "SBBLAT",

  /**
   * submitted billed electronic count
   */
  submittedbilledelectroniccount: "SBBLELCT",

  /**
   * submitted billed electronic count
   */
  submittedbilledelectroniccount: "SBBLCT",

  /**
   * submitted nullified electronic amount
   */
  submittednullifiedelectronicamount: "SBNFELAT",

  /**
   * submitted nullified electronic amount
   */
  submittednullifiedelectronicamount: "SBCNAT",

  /**
   * submitted cancelled electronic count
   */
  submittedcancelledelectroniccount: "SBNFELCT",

  /**
   * submitted cancelled electronic count
   */
  submittedcancelledelectroniccount: "SBCNCT",

  /**
   * submitted pending electronic amount
   */
  submittedpendingelectronicamount: "SBPDELAT",

  /**
   * submitted pending electronic amount
   */
  submittedpendingelectronicamount: "SBPDAT",

  /**
   * submitted pending electronic count
   */
  submittedpendingelectroniccount: "SBPDELCT",

  /**
   * submitted pending electronic count
   */
  submittedpendingelectroniccount: "SBPDCT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InvoiceElementSubmittedCode =
  typeof InvoiceElementSubmittedCode[keyof typeof InvoiceElementSubmittedCode];
