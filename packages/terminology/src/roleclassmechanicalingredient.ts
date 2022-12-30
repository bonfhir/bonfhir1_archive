/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassMechanicalIngredient
 */
export const RoleClassMechanicalIngredientCode = {
  /**
   * mechanical ingredient
   */
  MECH: "MECH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassMechanicalIngredientCode =
  typeof RoleClassMechanicalIngredientCode[keyof typeof RoleClassMechanicalIngredientCode];
