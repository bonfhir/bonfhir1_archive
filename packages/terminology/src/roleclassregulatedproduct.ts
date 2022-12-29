/**
 * A product regulated by some governmentatl orgnization. The role is played by Material and scoped by Organization.

Rationale: To support an entity clone used to identify the NDC number for a drug product.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassRegulatedProduct
 */
export const RoleClassRegulatedProductCode = {
  /**
   * regulated product
   */
  regulatedproduct: "RGPR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassRegulatedProductCode =
  typeof RoleClassRegulatedProductCode[keyof typeof RoleClassRegulatedProductCode];
