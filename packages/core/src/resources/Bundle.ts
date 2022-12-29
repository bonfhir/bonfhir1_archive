import { Bundle } from "fhir/r4";

export const buildBundle = (resource: Omit<Bundle, "resourceType">) => ({
  ...resource,
  resourceType: "Bundle",
});
