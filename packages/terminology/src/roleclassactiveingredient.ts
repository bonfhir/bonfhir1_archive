/**
 * A therapeutically active ingredient (player) in a mixture (scoper), where the mixture is typically a manufactured pharmaceutical.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassActiveIngredient
 */
export const RoleClassActiveIngredientCode = {
  /**
   * active ingredient
   */
  ACTI: "ACTI",

  /**
   * active ingredient - basis of strength
   */
  ACTIB: "ACTIB",

  /**
   * active ingredient - moiety is basis of strength
   */
  ACTIM: "ACTIM",

  /**
   * active ingredient - reference substance is basis of strength
   */
  ACTIR: "ACTIR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassActiveIngredientCode =
  typeof RoleClassActiveIngredientCode[keyof typeof RoleClassActiveIngredientCode];
