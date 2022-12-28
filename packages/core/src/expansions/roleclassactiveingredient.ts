/**
 * A therapeutically active ingredient (player) in a mixture (scoper), where the mixture is typically a manufactured pharmaceutical.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassActiveIngredient
 */
export const RoleClassActiveIngredientCode = {
  /**
   * active ingredient
   */
  ACTI: "ACTI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassActiveIngredientCode =
  typeof RoleClassActiveIngredientCode[keyof typeof RoleClassActiveIngredientCode];
