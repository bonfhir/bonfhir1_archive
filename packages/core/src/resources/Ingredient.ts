import { Ingredient } from "fhir/r4";

export const buildIngredient = (
  resource: Omit<Ingredient, "resourceType">
) => ({
  ...resource,
  resourceType: "Ingredient",
});
