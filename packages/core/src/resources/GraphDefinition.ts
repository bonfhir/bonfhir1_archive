import { GraphDefinition } from "fhir/r4";

export const buildGraphDefinition = (
  resource: Omit<GraphDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "GraphDefinition",
});
