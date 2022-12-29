import { ResearchStudy } from "fhir/r4";

export const buildResearchStudy = (
  resource: Omit<ResearchStudy, "resourceType">
) => ({
  ...resource,
  resourceType: "ResearchStudy",
});
