/**
 * Type of part of a name for a Medicinal Product.
 * http://hl7.org/fhir/ValueSet/medicinal-product-name-part-type
 */
export const ProductNamePartTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProductNamePartTypeCode =
  typeof ProductNamePartTypeCode[keyof typeof ProductNamePartTypeCode];
