import { BodyStructure } from "fhir/r4";

export const buildBodyStructure = (
  resource: Omit<BodyStructure, "resourceType">
) => ({
  ...resource,
  resourceType: "BodyStructure",
});
