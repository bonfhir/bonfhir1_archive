import { NamingSystem } from "fhir/r4";

export const buildNamingSystem = (
  resource: Omit<NamingSystem, "resourceType">
) => ({
  ...resource,
  resourceType: "NamingSystem",
});
