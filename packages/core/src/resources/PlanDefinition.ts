import { PlanDefinition } from "fhir/r4";

export const buildPlanDefinition = (
  resource: Omit<PlanDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "PlanDefinition",
});
