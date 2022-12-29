import { StructureMap } from "fhir/r4";

export const buildStructureMap = (
  resource: Omit<StructureMap, "resourceType">
) => ({
  ...resource,
  resourceType: "StructureMap",
});
