import { CompartmentDefinition } from "fhir/r4";

export const buildCompartmentDefinition = (
  resource: Omit<CompartmentDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "CompartmentDefinition",
});
