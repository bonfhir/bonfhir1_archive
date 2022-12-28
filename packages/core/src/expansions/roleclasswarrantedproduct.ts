/**
 * A role a product plays when a guarantee is given to the purchaser by the seller (scoping entity) stating that the product is reliable and free from known defects and that the seller will repair or replace defective parts within a given time limit and under certain conditions.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassWarrantedProduct
 */
export const RoleClassWarrantedProductCode = {
  /**
   * warranted product
   */
  WRTE: "WRTE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassWarrantedProductCode =
  typeof RoleClassWarrantedProductCode[keyof typeof RoleClassWarrantedProductCode];
