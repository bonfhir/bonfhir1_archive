import { StructureDefinition } from "fhir/r4";

export const buildStructureDefinition = (
  resource: Omit<StructureDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "StructureDefinition",
});
