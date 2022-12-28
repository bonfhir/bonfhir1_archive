/**
 * Identifies the different types of summary information that can be reported by queries dealing with Statement of Financial Activity (SOFA). The summary information is generally used to help resolve balance discrepancies between providers and payors.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceElementSummaryCode
 */
export const ActInvoiceElementSummaryCodeCode = {
  /**
   * InvoiceElementAdjudicated
   */
  _InvoiceElementAdjudicated: "_InvoiceElementAdjudicated",

  /**
   * adjud. nullified prior-period electronic amount
   */
  ADNFPPELAT: "ADNFPPELAT",

  /**
   * adjud. nullified prior-period electronic amount
   */
  ADCNPPELAT: "ADCNPPELAT",

  /**
   * adjud. nullified prior-period electronic count
   */
  ADNFPPELCT: "ADNFPPELCT",

  /**
   * adjud. nullified prior-period electronic count
   */
  ADCNPPELCT: "ADCNPPELCT",

  /**
   * adjud. nullified prior-period manual amount
   */
  ADNFPPMNAT: "ADNFPPMNAT",

  /**
   * adjud. nullified prior-period manual amount
   */
  ADCNPPMNAT: "ADCNPPMNAT",

  /**
   * adjud. nullified prior-period manual count
   */
  ADNFPPMNCT: "ADNFPPMNCT",

  /**
   * adjud. nullified prior-period manual count
   */
  ADCNPPMNCT: "ADCNPPMNCT",

  /**
   * adjud. nullified same-period electronic amount
   */
  ADNFSPELAT: "ADNFSPELAT",

  /**
   * adjud. nullified same-period electronic amount
   */
  ADCNSPELAT: "ADCNSPELAT",

  /**
   * adjud. nullified same-period electronic count
   */
  ADNFSPELCT: "ADNFSPELCT",

  /**
   * adjud. nullified same-period electronic count
   */
  ADCNSPELCT: "ADCNSPELCT",

  /**
   * adjud. nullified same-period manual amount
   */
  ADNFSPMNAT: "ADNFSPMNAT",

  /**
   * adjud. nullified same-period manual amount
   */
  ADCNSPMNAT: "ADCNSPMNAT",

  /**
   * adjud. nullified same-period manual count
   */
  ADNFSPMNCT: "ADNFSPMNCT",

  /**
   * adjud. nullified same-period manual count
   */
  ADCNSPMNCT: "ADCNSPMNCT",

  /**
   * adjud. non-payee payable prior-period electronic amount
   */
  ADNPPPELAT: "ADNPPPELAT",

  /**
   * adjud. non-payee payable prior-period electronic count
   */
  ADNPPPELCT: "ADNPPPELCT",

  /**
   * adjud. non-payee payable prior-period manual amount
   */
  ADNPPPMNAT: "ADNPPPMNAT",

  /**
   * adjud. non-payee payable prior-period manual count
   */
  ADNPPPMNCT: "ADNPPPMNCT",

  /**
   * adjud. non-payee payable same-period electronic amount
   */
  ADNPSPELAT: "ADNPSPELAT",

  /**
   * adjud. non-payee payable same-period electronic count
   */
  ADNPSPELCT: "ADNPSPELCT",

  /**
   * adjud. non-payee payable same-period manual amount
   */
  ADNPSPMNAT: "ADNPSPMNAT",

  /**
   * adjud. non-payee payable same-period manual count
   */
  ADNPSPMNCT: "ADNPSPMNCT",

  /**
   * adjud. payee payable prior-period electronic amount
   */
  ADPPPPELAT: "ADPPPPELAT",

  /**
   * adjud. payee payable prior-period electronic count
   */
  ADPPPPELCT: "ADPPPPELCT",

  /**
   * adjud. payee payable prior-period manual amout
   */
  ADPPPPMNAT: "ADPPPPMNAT",

  /**
   * adjud. payee payable prior-period manual count
   */
  ADPPPPMNCT: "ADPPPPMNCT",

  /**
   * adjud. payee payable same-period electronic amount
   */
  ADPPSPELAT: "ADPPSPELAT",

  /**
   * adjud. payee payable same-period electronic count
   */
  ADPPSPELCT: "ADPPSPELCT",

  /**
   * adjud. payee payable same-period manual amount
   */
  ADPPSPMNAT: "ADPPSPMNAT",

  /**
   * adjud. payee payable same-period manual count
   */
  ADPPSPMNCT: "ADPPSPMNCT",

  /**
   * adjud. refused prior-period electronic amount
   */
  ADRFPPELAT: "ADRFPPELAT",

  /**
   * adjud. refused prior-period electronic count
   */
  ADRFPPELCT: "ADRFPPELCT",

  /**
   * adjud. refused prior-period manual amount
   */
  ADRFPPMNAT: "ADRFPPMNAT",

  /**
   * adjud. refused prior-period manual count
   */
  ADRFPPMNCT: "ADRFPPMNCT",

  /**
   * adjud. refused same-period electronic amount
   */
  ADRFSPELAT: "ADRFSPELAT",

  /**
   * adjud. refused same-period electronic count
   */
  ADRFSPELCT: "ADRFSPELCT",

  /**
   * adjud. refused same-period manual amount
   */
  ADRFSPMNAT: "ADRFSPMNAT",

  /**
   * adjud. refused same-period manual count
   */
  ADRFSPMNCT: "ADRFSPMNCT",

  /**
   * InvoiceElementPaid
   */
  _InvoiceElementPaid: "_InvoiceElementPaid",

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

  /**
   * InvoiceElementSubmitted
   */
  _InvoiceElementSubmitted: "_InvoiceElementSubmitted",

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
export type ActInvoiceElementSummaryCodeCode =
  typeof ActInvoiceElementSummaryCodeCode[keyof typeof ActInvoiceElementSummaryCodeCode];
