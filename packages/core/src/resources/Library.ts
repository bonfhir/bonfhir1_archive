import { Library } from "fhir/r4";

export const buildLibrary = (resource: Omit<Library, "resourceType">) => ({
  ...resource,
  resourceType: "Library",
});
