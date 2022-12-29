import { ImplementationGuide } from "fhir/r4";

export const buildImplementationGuide = (
  resource: Omit<ImplementationGuide, "resourceType">
) => ({
  ...resource,
  resourceType: "ImplementationGuide",
});
