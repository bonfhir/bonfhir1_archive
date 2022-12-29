import { SpecimenDefinition } from "fhir/r4";

export const buildSpecimenDefinition = (
  resource: Omit<SpecimenDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "SpecimenDefinition",
});
