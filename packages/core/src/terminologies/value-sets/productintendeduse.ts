/**
 * The overall intended use of a product.
 * http://hl7.org/fhir/ValueSet/product-intended-use
 */
export const ProductIntendedUseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProductIntendedUseCode =
  typeof ProductIntendedUseCode[keyof typeof ProductIntendedUseCode];
