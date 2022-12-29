/**
 * Total counts and total net amounts adjudicated for all Invoice Groupings that were adjudicated within a time period based on the adjudication date of the Invoice Grouping.
 * http://terminology.hl7.org/ValueSet/v3-InvoiceElementAdjudicated
 */
export const InvoiceElementAdjudicatedCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InvoiceElementAdjudicatedCode =
  typeof InvoiceElementAdjudicatedCode[keyof typeof InvoiceElementAdjudicatedCode];
