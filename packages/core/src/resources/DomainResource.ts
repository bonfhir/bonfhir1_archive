import { DomainResource } from "fhir/r4";

export const buildDomainResource = (
  resource: Omit<DomainResource, "resourceType">
) => ({
  ...resource,
  resourceType: "DomainResource",
});
