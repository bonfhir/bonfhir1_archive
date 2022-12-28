/**
 * A classification of the ingredient identifying its purpose within the product.
 * http://hl7.org/fhir/ValueSet/ingredient-role
 */
export const IngredientRoleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IngredientRoleCode =
  typeof IngredientRoleCode[keyof typeof IngredientRoleCode];
