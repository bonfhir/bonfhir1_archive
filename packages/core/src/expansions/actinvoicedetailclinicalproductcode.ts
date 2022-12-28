/**
 * An identifying data string for healthcare products.
 * http://terminology.hl7.org/ValueSet/v3-ActInvoiceDetailClinicalProductCode
 */
export const ActInvoiceDetailClinicalProductCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActInvoiceDetailClinicalProductCodeCode =
  typeof ActInvoiceDetailClinicalProductCodeCode[keyof typeof ActInvoiceDetailClinicalProductCodeCode];
