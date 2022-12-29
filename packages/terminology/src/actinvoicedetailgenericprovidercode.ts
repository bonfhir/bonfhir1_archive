/**
 * The billable item codes to identify provider supplied charges or changes to the total billing of a claim.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailGenericProviderCode
 */
export const ActInvoiceDetailGenericProviderCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailGenericProviderCodeCode =
  typeof ActInvoiceDetailGenericProviderCodeCode[keyof typeof ActInvoiceDetailGenericProviderCodeCode];
