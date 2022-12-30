/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassActiveIngredientMoietyBasis
 */
export const RoleClassActiveIngredientMoietyBasisCode = {
  /**
   * active ingredient - moiety is basis of strength
   */
  ACTIM: "ACTIM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassActiveIngredientMoietyBasisCode =
  typeof RoleClassActiveIngredientMoietyBasisCode[keyof typeof RoleClassActiveIngredientMoietyBasisCode];
