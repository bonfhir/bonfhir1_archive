import { AllergyIntolerance } from "fhir/r4";

export const buildAllergyIntolerance = (
  resource: Omit<AllergyIntolerance, "resourceType">
) => ({
  ...resource,
  resourceType: "AllergyIntolerance",
});
