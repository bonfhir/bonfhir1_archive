import { RelatedPerson } from "fhir/r4";

export const buildRelatedPerson = (
  resource: Omit<RelatedPerson, "resourceType">
) => ({
  ...resource,
  resourceType: "RelatedPerson",
});
