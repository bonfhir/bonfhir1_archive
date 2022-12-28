/**
 * Value Set of codes that specify the type of invoice.
 * http://terminology.hl7.org/ValueSet/v2-0555
 */
export const Hl7VSInvoiceTypeCode = {
  /**
   * Fee for Service
   */
  FS: "FS",

  /**
   * By Session
   */
  SS: "SS",

  /**
   * Group
   */
  GP: "GP",

  /**
   * Block
   */
  BK: "BK",

  /**
   * Salary
   */
  SL: "SL",

  /**
   * Information Only
   */
  IN: "IN",

  /**
   * Non Patient
   */
  NP: "NP",

  /**
   * Final
   */
  FN: "FN",

  /**
   * Partial
   */
  PA: "PA",

  /**
   * Supplemental
   */
  SU: "SU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInvoiceTypeCode =
  typeof Hl7VSInvoiceTypeCode[keyof typeof Hl7VSInvoiceTypeCode];
