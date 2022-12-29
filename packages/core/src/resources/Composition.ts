import { Composition } from "fhir/r4";

export const buildComposition = (
  resource: Omit<Composition, "resourceType">
) => ({
  ...resource,
  resourceType: "Composition",
});
