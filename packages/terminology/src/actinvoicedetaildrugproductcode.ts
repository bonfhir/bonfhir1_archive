/**
 * An identifying data string for A substance used as a medication or in the preparation of medication.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailDrugProductCode
 */
export const ActInvoiceDetailDrugProductCodeCode = {
  /**
   * Global Trade Item Number
   */
  GlobalTradeItemNumber: "GTIN",

  /**
   * Universal Product Code
   */
  UniversalProductCode: "UPC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailDrugProductCodeCode =
  typeof ActInvoiceDetailDrugProductCodeCode[keyof typeof ActInvoiceDetailDrugProductCodeCode];
