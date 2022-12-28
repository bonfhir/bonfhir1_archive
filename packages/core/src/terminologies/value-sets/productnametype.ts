/**
 * Type of a name for a Medicinal Product.
 * http://hl7.org/fhir/ValueSet/medicinal-product-name-type
 */
export const ProductNameTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProductNameTypeCode =
  typeof ProductNameTypeCode[keyof typeof ProductNameTypeCode];
