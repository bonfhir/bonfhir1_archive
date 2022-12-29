import { ResearchElementDefinition } from "fhir/r4";

export const buildResearchElementDefinition = (
  resource: Omit<ResearchElementDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "ResearchElementDefinition",
});
