/**
 * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
 * http://hl7.org/fhir/ValueSet/ingredient-manufacturer-role
 */
export const IngredientManufacturerRoleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IngredientManufacturerRoleCode =
  typeof IngredientManufacturerRoleCode[keyof typeof IngredientManufacturerRoleCode];
