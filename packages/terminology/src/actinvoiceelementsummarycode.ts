/**
 * Identifies the different types of summary information that can be reported by queries dealing with Statement of Financial Activity (SOFA). The summary information is generally used to help resolve balance discrepancies between providers and payors.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceElementSummaryCode
 */
export const ActInvoiceElementSummaryCodeCode = {
  /**
   * InvoiceElementAdjudicated
   */
  InvoiceElementAdjudicated: "_InvoiceElementAdjudicated",

  /**
   * adjud. nullified prior-period electronic amount
   */
  adjudnullifiedpriorperiodelectronicamount: "ADNFPPELAT",

  /**
   * adjud. nullified prior-period electronic amount
   */
  adjudnullifiedpriorperiodelectronicamount: "ADCNPPELAT",

  /**
   * adjud. nullified prior-period electronic count
   */
  adjudnullifiedpriorperiodelectroniccount: "ADNFPPELCT",

  /**
   * adjud. nullified prior-period electronic count
   */
  adjudnullifiedpriorperiodelectroniccount: "ADCNPPELCT",

  /**
   * adjud. nullified prior-period manual amount
   */
  adjudnullifiedpriorperiodmanualamount: "ADNFPPMNAT",

  /**
   * adjud. nullified prior-period manual amount
   */
  adjudnullifiedpriorperiodmanualamount: "ADCNPPMNAT",

  /**
   * adjud. nullified prior-period manual count
   */
  adjudnullifiedpriorperiodmanualcount: "ADNFPPMNCT",

  /**
   * adjud. nullified prior-period manual count
   */
  adjudnullifiedpriorperiodmanualcount: "ADCNPPMNCT",

  /**
   * adjud. nullified same-period electronic amount
   */
  adjudnullifiedsameperiodelectronicamount: "ADNFSPELAT",

  /**
   * adjud. nullified same-period electronic amount
   */
  adjudnullifiedsameperiodelectronicamount: "ADCNSPELAT",

  /**
   * adjud. nullified same-period electronic count
   */
  adjudnullifiedsameperiodelectroniccount: "ADNFSPELCT",

  /**
   * adjud. nullified same-period electronic count
   */
  adjudnullifiedsameperiodelectroniccount: "ADCNSPELCT",

  /**
   * adjud. nullified same-period manual amount
   */
  adjudnullifiedsameperiodmanualamount: "ADNFSPMNAT",

  /**
   * adjud. nullified same-period manual amount
   */
  adjudnullifiedsameperiodmanualamount: "ADCNSPMNAT",

  /**
   * adjud. nullified same-period manual count
   */
  adjudnullifiedsameperiodmanualcount: "ADNFSPMNCT",

  /**
   * adjud. nullified same-period manual count
   */
  adjudnullifiedsameperiodmanualcount: "ADCNSPMNCT",

  /**
   * adjud. non-payee payable prior-period electronic amount
   */
  adjudnonpayeepayablepriorperiodelectronicamount: "ADNPPPELAT",

  /**
   * adjud. non-payee payable prior-period electronic count
   */
  adjudnonpayeepayablepriorperiodelectroniccount: "ADNPPPELCT",

  /**
   * adjud. non-payee payable prior-period manual amount
   */
  adjudnonpayeepayablepriorperiodmanualamount: "ADNPPPMNAT",

  /**
   * adjud. non-payee payable prior-period manual count
   */
  adjudnonpayeepayablepriorperiodmanualcount: "ADNPPPMNCT",

  /**
   * adjud. non-payee payable same-period electronic amount
   */
  adjudnonpayeepayablesameperiodelectronicamount: "ADNPSPELAT",

  /**
   * adjud. non-payee payable same-period electronic count
   */
  adjudnonpayeepayablesameperiodelectroniccount: "ADNPSPELCT",

  /**
   * adjud. non-payee payable same-period manual amount
   */
  adjudnonpayeepayablesameperiodmanualamount: "ADNPSPMNAT",

  /**
   * adjud. non-payee payable same-period manual count
   */
  adjudnonpayeepayablesameperiodmanualcount: "ADNPSPMNCT",

  /**
   * adjud. payee payable prior-period electronic amount
   */
  adjudpayeepayablepriorperiodelectronicamount: "ADPPPPELAT",

  /**
   * adjud. payee payable prior-period electronic count
   */
  adjudpayeepayablepriorperiodelectroniccount: "ADPPPPELCT",

  /**
   * adjud. payee payable prior-period manual amout
   */
  adjudpayeepayablepriorperiodmanualamout: "ADPPPPMNAT",

  /**
   * adjud. payee payable prior-period manual count
   */
  adjudpayeepayablepriorperiodmanualcount: "ADPPPPMNCT",

  /**
   * adjud. payee payable same-period electronic amount
   */
  adjudpayeepayablesameperiodelectronicamount: "ADPPSPELAT",

  /**
   * adjud. payee payable same-period electronic count
   */
  adjudpayeepayablesameperiodelectroniccount: "ADPPSPELCT",

  /**
   * adjud. payee payable same-period manual amount
   */
  adjudpayeepayablesameperiodmanualamount: "ADPPSPMNAT",

  /**
   * adjud. payee payable same-period manual count
   */
  adjudpayeepayablesameperiodmanualcount: "ADPPSPMNCT",

  /**
   * adjud. refused prior-period electronic amount
   */
  adjudrefusedpriorperiodelectronicamount: "ADRFPPELAT",

  /**
   * adjud. refused prior-period electronic count
   */
  adjudrefusedpriorperiodelectroniccount: "ADRFPPELCT",

  /**
   * adjud. refused prior-period manual amount
   */
  adjudrefusedpriorperiodmanualamount: "ADRFPPMNAT",

  /**
   * adjud. refused prior-period manual count
   */
  adjudrefusedpriorperiodmanualcount: "ADRFPPMNCT",

  /**
   * adjud. refused same-period electronic amount
   */
  adjudrefusedsameperiodelectronicamount: "ADRFSPELAT",

  /**
   * adjud. refused same-period electronic count
   */
  adjudrefusedsameperiodelectroniccount: "ADRFSPELCT",

  /**
   * adjud. refused same-period manual amount
   */
  adjudrefusedsameperiodmanualamount: "ADRFSPMNAT",

  /**
   * adjud. refused same-period manual count
   */
  adjudrefusedsameperiodmanualcount: "ADRFSPMNCT",

  /**
   * InvoiceElementPaid
   */
  InvoiceElementPaid: "_InvoiceElementPaid",

  /**
   * paid nullified prior-period electronic amount
   */
  paidnullifiedpriorperiodelectronicamount: "PDNFPPELAT",

  /**
   * paid nullified prior-period electronic amount
   */
  paidnullifiedpriorperiodelectronicamount: "PDCNPPELAT",

  /**
   * paid nullified prior-period electronic count
   */
  paidnullifiedpriorperiodelectroniccount: "PDNFPPELCT",

  /**
   * paid nullified prior-period electronic count
   */
  paidnullifiedpriorperiodelectroniccount: "PDCNPPELCT",

  /**
   * paid nullified prior-period manual amount
   */
  paidnullifiedpriorperiodmanualamount: "PDNFPPMNAT",

  /**
   * paid nullified prior-period manual amount
   */
  paidnullifiedpriorperiodmanualamount: "PDCNPPMNAT",

  /**
   * paid nullified prior-period manual count
   */
  paidnullifiedpriorperiodmanualcount: "PDNFPPMNCT",

  /**
   * paid nullified prior-period manual count
   */
  paidnullifiedpriorperiodmanualcount: "PDCNPPMNCT",

  /**
   * paid nullified same-period electronic amount
   */
  paidnullifiedsameperiodelectronicamount: "PDNFSPELAT",

  /**
   * paid nullified same-period electronic amount
   */
  paidnullifiedsameperiodelectronicamount: "PDCNSPELAT",

  /**
   * paid nullified same-period electronic count
   */
  paidnullifiedsameperiodelectroniccount: "PDNFSPELCT",

  /**
   * paid nullified same-period electronic count
   */
  paidnullifiedsameperiodelectroniccount: "PDCNSPELCT",

  /**
   * paid nullified same-period manual amount
   */
  paidnullifiedsameperiodmanualamount: "PDNFSPMNAT",

  /**
   * paid nullified same-period manual amount
   */
  paidnullifiedsameperiodmanualamount: "PDCNSPMNAT",

  /**
   * paid nullified same-period manual count
   */
  paidnullifiedsameperiodmanualcount: "PDNFSPMNCT",

  /**
   * paid nullified same-period manual count
   */
  paidnullifiedsameperiodmanualcount: "PDCNSPMNCT",

  /**
   * paid non-payee payable prior-period electronic amount
   */
  paidnonpayeepayablepriorperiodelectronicamount: "PDNPPPELAT",

  /**
   * paid non-payee payable prior-period electronic count
   */
  paidnonpayeepayablepriorperiodelectroniccount: "PDNPPPELCT",

  /**
   * paid non-payee payable prior-period manual amount
   */
  paidnonpayeepayablepriorperiodmanualamount: "PDNPPPMNAT",

  /**
   * paid non-payee payable prior-period manual count
   */
  paidnonpayeepayablepriorperiodmanualcount: "PDNPPPMNCT",

  /**
   * paid non-payee payable same-period electronic amount
   */
  paidnonpayeepayablesameperiodelectronicamount: "PDNPSPELAT",

  /**
   * paid non-payee payable same-period electronic count
   */
  paidnonpayeepayablesameperiodelectroniccount: "PDNPSPELCT",

  /**
   * paid non-payee payable same-period manual amount
   */
  paidnonpayeepayablesameperiodmanualamount: "PDNPSPMNAT",

  /**
   * paid non-payee payable same-period manual count
   */
  paidnonpayeepayablesameperiodmanualcount: "PDNPSPMNCT",

  /**
   * paid payee payable prior-period electronic amount
   */
  paidpayeepayablepriorperiodelectronicamount: "PDPPPPELAT",

  /**
   * paid payee payable prior-period electronic count
   */
  paidpayeepayablepriorperiodelectroniccount: "PDPPPPELCT",

  /**
   * paid payee payable prior-period manual amount
   */
  paidpayeepayablepriorperiodmanualamount: "PDPPPPMNAT",

  /**
   * paid payee payable prior-period manual count
   */
  paidpayeepayablepriorperiodmanualcount: "PDPPPPMNCT",

  /**
   * paid payee payable same-period electronic amount
   */
  paidpayeepayablesameperiodelectronicamount: "PDPPSPELAT",

  /**
   * paid payee payable same-period electronic count
   */
  paidpayeepayablesameperiodelectroniccount: "PDPPSPELCT",

  /**
   * paid payee payable same-period manual amount
   */
  paidpayeepayablesameperiodmanualamount: "PDPPSPMNAT",

  /**
   * paid payee payable same-period manual count
   */
  paidpayeepayablesameperiodmanualcount: "PDPPSPMNCT",

  /**
   * InvoiceElementSubmitted
   */
  InvoiceElementSubmitted: "_InvoiceElementSubmitted",

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
export type ActInvoiceElementSummaryCodeCode =
  typeof ActInvoiceElementSummaryCodeCode[keyof typeof ActInvoiceElementSummaryCodeCode];
