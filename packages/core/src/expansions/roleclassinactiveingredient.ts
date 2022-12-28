/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassInactiveIngredient
 */
export const RoleClassInactiveIngredientCode = {
  /**
   * inactive ingredient
   */
  IACT: "IACT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassInactiveIngredientCode =
  typeof RoleClassInactiveIngredientCode[keyof typeof RoleClassInactiveIngredientCode];
