/**
 * The detail item codes to identify charges or changes to the total billing of a claim due to insurance rules and payments.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailGenericCode
 */
export const ActInvoiceDetailGenericCodeCode = {
  /**
   * ActInvoiceDetailGenericAdjudicatorCode
   */
  _ActInvoiceDetailGenericAdjudicatorCode:
    "_ActInvoiceDetailGenericAdjudicatorCode",

  /**
   * coinsurance
   */
  COIN: "COIN",

  /**
   * patient co-pay
   */
  COPAYMENT: "COPAYMENT",

  /**
   * deductible
   */
  DEDUCTIBLE: "DEDUCTIBLE",

  /**
   * payment
   */
  PAY: "PAY",

  /**
   * spend down
   */
  SPEND: "SPEND",

  /**
   * co-insurance
   */
  COINS: "COINS",

  /**
   * ActInvoiceDetailGenericModifierCode
   */
  _ActInvoiceDetailGenericModifierCode: "_ActInvoiceDetailGenericModifierCode",

  /**
   * non-normal hours
   */
  AFTHRS: "AFTHRS",

  /**
   * isolation allowance
   */
  ISOL: "ISOL",

  /**
   * out of office
   */
  OOO: "OOO",

  /**
   * ActInvoiceDetailGenericProviderCode
   */
  _ActInvoiceDetailGenericProviderCode: "_ActInvoiceDetailGenericProviderCode",

  /**
   * cancelled appointment
   */
  CANCAPT: "CANCAPT",

  /**
   * discount
   */
  DSC: "DSC",

  /**
   * extraordinary service assessment
   */
  ESA: "ESA",

  /**
   * fee for service top off
   */
  FFSTOP: "FFSTOP",

  /**
   * final fee
   */
  FNLFEE: "FNLFEE",

  /**
   * first fee
   */
  FRSTFEE: "FRSTFEE",

  /**
   * markup or up-charge
   */
  MARKUP: "MARKUP",

  /**
   * missed appointment
   */
  MISSAPT: "MISSAPT",

  /**
   * periodic fee
   */
  PERFEE: "PERFEE",

  /**
   * performance bonus
   */
  PERMBNS: "PERMBNS",

  /**
   * restocking fee
   */
  RESTOCK: "RESTOCK",

  /**
   * travel
   */
  TRAVEL: "TRAVEL",

  /**
   * urgent
   */
  URGENT: "URGENT",

  /**
   * ActInvoiceDetailTaxCode
   */
  _ActInvoiceDetailTaxCode: "_ActInvoiceDetailTaxCode",

  /**
   * federal sales tax
   */
  FST: "FST",

  /**
   * harmonized sales Tax
   */
  HST: "HST",

  /**
   * provincial/state sales tax
   */
  PST: "PST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailGenericCodeCode =
  typeof ActInvoiceDetailGenericCodeCode[keyof typeof ActInvoiceDetailGenericCodeCode];
