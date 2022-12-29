import { ActivityDefinition } from "fhir/r4";

export const buildActivityDefinition = (
  resource: Omit<ActivityDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "ActivityDefinition",
});
