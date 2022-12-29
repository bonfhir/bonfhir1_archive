import { CapabilityStatement } from "fhir/r4";

export const buildCapabilityStatement = (
  resource: Omit<CapabilityStatement, "resourceType">
) => ({
  ...resource,
  resourceType: "CapabilityStatement",
});
