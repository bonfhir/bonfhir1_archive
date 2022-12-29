import { Goal } from "fhir/r4";

export const buildGoal = (resource: Omit<Goal, "resourceType">) => ({
  ...resource,
  resourceType: "Goal",
});
