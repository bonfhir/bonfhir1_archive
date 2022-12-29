import { NutritionProduct } from "fhir/r4";

export const buildNutritionProduct = (
  resource: Omit<NutritionProduct, "resourceType">
) => ({
  ...resource,
  resourceType: "NutritionProduct",
});
