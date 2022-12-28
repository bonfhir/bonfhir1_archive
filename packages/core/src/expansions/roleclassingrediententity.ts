/**
 * Relates a component (player) to a mixture (scoper). E.g., Glucose and Water are ingredients of D5W, latex may be an ingredient in a tracheal tube.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassIngredientEntity
 */
export const RoleClassIngredientEntityCode = {
  /**
   * ingredient
   */
  INGR: "INGR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassIngredientEntityCode =
  typeof RoleClassIngredientEntityCode[keyof typeof RoleClassIngredientEntityCode];
