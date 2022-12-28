/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassContaminantIngredient
 */
export const RoleClassContaminantIngredientCode = {
  /**
   * contaminant ingredient
   */
  CNTM: "CNTM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassContaminantIngredientCode =
  typeof RoleClassContaminantIngredientCode[keyof typeof RoleClassContaminantIngredientCode];
