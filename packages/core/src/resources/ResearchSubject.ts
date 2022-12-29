import { ResearchSubject } from "fhir/r4";

export const buildResearchSubject = (
  resource: Omit<ResearchSubject, "resourceType">
) => ({
  ...resource,
  resourceType: "ResearchSubject",
});
