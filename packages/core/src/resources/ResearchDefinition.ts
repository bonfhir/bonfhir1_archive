import { ResearchDefinition } from "fhir/r4";

export const buildResearchDefinition = (
  resource: Omit<ResearchDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "ResearchDefinition",
});
