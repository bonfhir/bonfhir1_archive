import { Citation } from "fhir/r4";

export const buildCitation = (resource: Omit<Citation, "resourceType">) => ({
  ...resource,
  resourceType: "Citation",
});
