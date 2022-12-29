import { ManufacturedItemDefinition } from "fhir/r4";

export const buildManufacturedItemDefinition = (
  resource: Omit<ManufacturedItemDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "ManufacturedItemDefinition",
});
