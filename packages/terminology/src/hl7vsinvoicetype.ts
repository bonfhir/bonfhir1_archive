/**
 * Value Set of codes that specify the type of invoice.
 * http://terminology.hl7.org/ValueSet/v2-0555
 */
export const Hl7VSInvoiceTypeCode = {
  /**
   * Fee for Service
   */
  FeeforService: "FS",

  /**
   * By Session
   */
  BySession: "SS",

  /**
   * Group
   */
  Group: "GP",

  /**
   * Block
   */
  Block: "BK",

  /**
   * Salary
   */
  Salary: "SL",

  /**
   * Information Only
   */
  InformationOnly: "IN",

  /**
   * Non Patient
   */
  NonPatient: "NP",

  /**
   * Final
   */
  Final: "FN",

  /**
   * Partial
   */
  Partial: "PA",

  /**
   * Supplemental
   */
  Supplemental: "SU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInvoiceTypeCode =
  typeof Hl7VSInvoiceTypeCode[keyof typeof Hl7VSInvoiceTypeCode];
