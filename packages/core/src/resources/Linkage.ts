import { Linkage } from "fhir/r4";

export const buildLinkage = (resource: Omit<Linkage, "resourceType">) => ({
  ...resource,
  resourceType: "Linkage",
});
