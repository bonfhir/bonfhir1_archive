import { Evidence } from "fhir/r4";

export const buildEvidence = (resource: Omit<Evidence, "resourceType">) => ({
  ...resource,
  resourceType: "Evidence",
});
