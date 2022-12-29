/**
 * Scoped by the manufacturer
 * http://terminology.hl7.org/ValueSet/v3-RoleClassManufacturedProduct
 */
export const RoleClassManufacturedProductCode = {
  /**
   * manufactured product
   */
  manufacturedproduct: "MANU",

  /**
   * therapeutic agent
   */
  therapeuticagent: "THER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassManufacturedProductCode =
  typeof RoleClassManufacturedProductCode[keyof typeof RoleClassManufacturedProductCode];
