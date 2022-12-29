import { Resource } from "fhir/r4";

export const buildResource = (resource: Omit<Resource, "resourceType">) => ({
  ...resource,
  resourceType: "Resource",
});
