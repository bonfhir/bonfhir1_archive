/**
 * Total counts and total net amounts paid for all Invoice Groupings that were paid within a time period based on the payment date.
 * http://terminology.hl7.org/ValueSet/v3-InvoiceElementPaid
 */
export const InvoiceElementPaidCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InvoiceElementPaidCode =
  typeof InvoiceElementPaidCode[keyof typeof InvoiceElementPaidCode];
