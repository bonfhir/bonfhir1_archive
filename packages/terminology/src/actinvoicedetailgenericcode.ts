/**
 * The detail item codes to identify charges or changes to the total billing of a claim due to insurance rules and payments.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailGenericCode
 */
export const ActInvoiceDetailGenericCodeCode = {
  /**
   * ActInvoiceDetailGenericAdjudicatorCode
   */
  ActInvoiceDetailGenericAdjudicatorCode:
    "_ActInvoiceDetailGenericAdjudicatorCode",

  /**
   * coinsurance
   */
  coinsurance: "COIN",

  /**
   * patient co-pay
   */
  patientcopay: "COPAYMENT",

  /**
   * deductible
   */
  deductible: "DEDUCTIBLE",

  /**
   * payment
   */
  payment: "PAY",

  /**
   * spend down
   */
  spenddown: "SPEND",

  /**
   * co-insurance
   */
  coinsurance: "COINS",

  /**
   * ActInvoiceDetailGenericModifierCode
   */
  ActInvoiceDetailGenericModifierCode: "_ActInvoiceDetailGenericModifierCode",

  /**
   * non-normal hours
   */
  nonnormalhours: "AFTHRS",

  /**
   * isolation allowance
   */
  isolationallowance: "ISOL",

  /**
   * out of office
   */
  outofoffice: "OOO",

  /**
   * ActInvoiceDetailGenericProviderCode
   */
  ActInvoiceDetailGenericProviderCode: "_ActInvoiceDetailGenericProviderCode",

  /**
   * cancelled appointment
   */
  cancelledappointment: "CANCAPT",

  /**
   * discount
   */
  discount: "DSC",

  /**
   * extraordinary service assessment
   */
  extraordinaryserviceassessment: "ESA",

  /**
   * fee for service top off
   */
  feeforservicetopoff: "FFSTOP",

  /**
   * final fee
   */
  finalfee: "FNLFEE",

  /**
   * first fee
   */
  firstfee: "FRSTFEE",

  /**
   * markup or up-charge
   */
  markuporupcharge: "MARKUP",

  /**
   * missed appointment
   */
  missedappointment: "MISSAPT",

  /**
   * periodic fee
   */
  periodicfee: "PERFEE",

  /**
   * performance bonus
   */
  performancebonus: "PERMBNS",

  /**
   * restocking fee
   */
  restockingfee: "RESTOCK",

  /**
   * travel
   */
  travel: "TRAVEL",

  /**
   * urgent
   */
  urgent: "URGENT",

  /**
   * ActInvoiceDetailTaxCode
   */
  ActInvoiceDetailTaxCode: "_ActInvoiceDetailTaxCode",

  /**
   * federal sales tax
   */
  federalsalestax: "FST",

  /**
   * harmonized sales Tax
   */
  harmonizedsalesTax: "HST",

  /**
   * provincial/state sales tax
   */
  provincialstatesalestax: "PST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailGenericCodeCode =
  typeof ActInvoiceDetailGenericCodeCode[keyof typeof ActInvoiceDetailGenericCodeCode];
