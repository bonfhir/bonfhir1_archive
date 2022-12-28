/**
 * Biologically Derived Product Category.
 * http://hl7.org/fhir/ValueSet/product-category
 */
export const BiologicallyDerivedProductCategoryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BiologicallyDerivedProductCategoryCode =
  typeof BiologicallyDerivedProductCategoryCode[keyof typeof BiologicallyDerivedProductCategoryCode];
