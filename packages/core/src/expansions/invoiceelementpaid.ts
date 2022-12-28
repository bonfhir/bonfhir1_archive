/**
 * Total counts and total net amounts paid for all Invoice Groupings that were paid within a time period based on the payment date.
 * http://terminology.hl7.org/ValueSet/v3-InvoiceElementPaid
 */
export const InvoiceElementPaidCode = {
  /**
   * paid nullified prior-period electronic amount
   */
  PDNFPPELAT: "PDNFPPELAT",

  /**
   * paid nullified prior-period electronic amount
   */
  PDCNPPELAT: "PDCNPPELAT",

  /**
   * paid nullified prior-period electronic count
   */
  PDNFPPELCT: "PDNFPPELCT",

  /**
   * paid nullified prior-period electronic count
   */
  PDCNPPELCT: "PDCNPPELCT",

  /**
   * paid nullified prior-period manual amount
   */
  PDNFPPMNAT: "PDNFPPMNAT",

  /**
   * paid nullified prior-period manual amount
   */
  PDCNPPMNAT: "PDCNPPMNAT",

  /**
   * paid nullified prior-period manual count
   */
  PDNFPPMNCT: "PDNFPPMNCT",

  /**
   * paid nullified prior-period manual count
   */
  PDCNPPMNCT: "PDCNPPMNCT",

  /**
   * paid nullified same-period electronic amount
   */
  PDNFSPELAT: "PDNFSPELAT",

  /**
   * paid nullified same-period electronic amount
   */
  PDCNSPELAT: "PDCNSPELAT",

  /**
   * paid nullified same-period electronic count
   */
  PDNFSPELCT: "PDNFSPELCT",

  /**
   * paid nullified same-period electronic count
   */
  PDCNSPELCT: "PDCNSPELCT",

  /**
   * paid nullified same-period manual amount
   */
  PDNFSPMNAT: "PDNFSPMNAT",

  /**
   * paid nullified same-period manual amount
   */
  PDCNSPMNAT: "PDCNSPMNAT",

  /**
   * paid nullified same-period manual count
   */
  PDNFSPMNCT: "PDNFSPMNCT",

  /**
   * paid nullified same-period manual count
   */
  PDCNSPMNCT: "PDCNSPMNCT",

  /**
   * paid non-payee payable prior-period electronic amount
   */
  PDNPPPELAT: "PDNPPPELAT",

  /**
   * paid non-payee payable prior-period electronic count
   */
  PDNPPPELCT: "PDNPPPELCT",

  /**
   * paid non-payee payable prior-period manual amount
   */
  PDNPPPMNAT: "PDNPPPMNAT",

  /**
   * paid non-payee payable prior-period manual count
   */
  PDNPPPMNCT: "PDNPPPMNCT",

  /**
   * paid non-payee payable same-period electronic amount
   */
  PDNPSPELAT: "PDNPSPELAT",

  /**
   * paid non-payee payable same-period electronic count
   */
  PDNPSPELCT: "PDNPSPELCT",

  /**
   * paid non-payee payable same-period manual amount
   */
  PDNPSPMNAT: "PDNPSPMNAT",

  /**
   * paid non-payee payable same-period manual count
   */
  PDNPSPMNCT: "PDNPSPMNCT",

  /**
   * paid payee payable prior-period electronic amount
   */
  PDPPPPELAT: "PDPPPPELAT",

  /**
   * paid payee payable prior-period electronic count
   */
  PDPPPPELCT: "PDPPPPELCT",

  /**
   * paid payee payable prior-period manual amount
   */
  PDPPPPMNAT: "PDPPPPMNAT",

  /**
   * paid payee payable prior-period manual count
   */
  PDPPPPMNCT: "PDPPPPMNCT",

  /**
   * paid payee payable same-period electronic amount
   */
  PDPPSPELAT: "PDPPSPELAT",

  /**
   * paid payee payable same-period electronic count
   */
  PDPPSPELCT: "PDPPSPELCT",

  /**
   * paid payee payable same-period manual amount
   */
  PDPPSPMNAT: "PDPPSPMNAT",

  /**
   * paid payee payable same-period manual count
   */
  PDPPSPMNCT: "PDPPSPMNCT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InvoiceElementPaidCode =
  typeof InvoiceElementPaidCode[keyof typeof InvoiceElementPaidCode];
