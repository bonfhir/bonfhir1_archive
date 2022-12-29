/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassActiveIngredientReferenceBasis
 */
export const RoleClassActiveIngredientReferenceBasisCode = {
  /**
   * active ingredient - reference substance is basis of strength
   */
  activeingredientreferencesubstanceisbasisofstrength: "ACTIR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassActiveIngredientReferenceBasisCode =
  typeof RoleClassActiveIngredientReferenceBasisCode[keyof typeof RoleClassActiveIngredientReferenceBasisCode];
