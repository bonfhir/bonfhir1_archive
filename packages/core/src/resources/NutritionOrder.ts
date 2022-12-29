import { NutritionOrder } from "fhir/r4";

export const buildNutritionOrder = (
  resource: Omit<NutritionOrder, "resourceType">
) => ({
  ...resource,
  resourceType: "NutritionOrder",
});
