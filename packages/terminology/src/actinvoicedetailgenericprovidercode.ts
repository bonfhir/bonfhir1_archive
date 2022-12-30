/**
 * The billable item codes to identify provider supplied charges or changes to the total billing of a claim.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailGenericProviderCode
 */
export const ActInvoiceDetailGenericProviderCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailGenericProviderCodeCode =
  typeof ActInvoiceDetailGenericProviderCodeCode[keyof typeof ActInvoiceDetailGenericProviderCodeCode];
