/**
 * Scoped by the manufacturer
 * http://terminology.hl7.org/ValueSet/v3-RoleClassManufacturedProduct
 */
export const RoleClassManufacturedProductCode = {
  /**
   * manufactured product
   */
  MANU: "MANU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassManufacturedProductCode =
  typeof RoleClassManufacturedProductCode[keyof typeof RoleClassManufacturedProductCode];
