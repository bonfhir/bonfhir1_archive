import { Provenance } from "fhir/r4";

export const buildProvenance = (
  resource: Omit<Provenance, "resourceType">
) => ({
  ...resource,
  resourceType: "Provenance",
});
