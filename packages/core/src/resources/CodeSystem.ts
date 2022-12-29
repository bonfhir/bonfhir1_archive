import { CodeSystem } from "fhir/r4";

export const buildCodeSystem = (
  resource: Omit<CodeSystem, "resourceType">
) => ({
  ...resource,
  resourceType: "CodeSystem",
});
