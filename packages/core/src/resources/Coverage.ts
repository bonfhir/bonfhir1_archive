import { Coverage } from "fhir/r4";

export const buildCoverage = (resource: Omit<Coverage, "resourceType">) => ({
  ...resource,
  resourceType: "Coverage",
});
