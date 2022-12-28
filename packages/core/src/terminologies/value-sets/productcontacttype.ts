/**
 * Contact type for a Medicinal Product.
 * http://hl7.org/fhir/ValueSet/medicinal-product-contact-type
 */
export const ProductContactTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProductContactTypeCode =
  typeof ProductContactTypeCode[keyof typeof ProductContactTypeCode];
