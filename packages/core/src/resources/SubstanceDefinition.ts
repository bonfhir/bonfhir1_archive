import { SubstanceDefinition } from "fhir/r4";

export const buildSubstanceDefinition = (
  resource: Omit<SubstanceDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "SubstanceDefinition",
});
