/**
 * A classification of the ingredient identifying its precise purpose(s) in the drug product (beyond e.g. active/inactive).
 * http://hl7.org/fhir/ValueSet/ingredient-function
 */
export const IngredientFunctionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IngredientFunctionCode =
  typeof IngredientFunctionCode[keyof typeof IngredientFunctionCode];
