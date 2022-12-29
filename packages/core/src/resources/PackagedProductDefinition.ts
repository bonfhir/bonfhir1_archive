import { PackagedProductDefinition } from "fhir/r4";

export const buildPackagedProductDefinition = (
  resource: Omit<PackagedProductDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "PackagedProductDefinition",
});
