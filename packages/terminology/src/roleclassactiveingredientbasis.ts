/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassActiveIngredientBasis
 */
export const RoleClassActiveIngredientBasisCode = {
  /**
   * active ingredient - basis of strength
   */
  activeingredientbasisofstrength: "ACTIB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassActiveIngredientBasisCode =
  typeof RoleClassActiveIngredientBasisCode[keyof typeof RoleClassActiveIngredientBasisCode];
