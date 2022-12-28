/**
 * Total counts and total net amounts adjudicated for all Invoice Groupings that were adjudicated within a time period based on the adjudication date of the Invoice Grouping.
 * http://terminology.hl7.org/ValueSet/v3-InvoiceElementAdjudicated
 */
export const InvoiceElementAdjudicatedCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InvoiceElementAdjudicatedCode =
  typeof InvoiceElementAdjudicatedCode[keyof typeof InvoiceElementAdjudicatedCode];
