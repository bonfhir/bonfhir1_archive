/**
 * The billable item codes to identify modifications to a billable item charge. As for example after hours increase in the office visit fee.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailGenericModifierCode
 */
export const ActInvoiceDetailGenericModifierCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailGenericModifierCodeCode =
  typeof ActInvoiceDetailGenericModifierCodeCode[keyof typeof ActInvoiceDetailGenericModifierCodeCode];
