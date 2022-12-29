import { ConceptMap } from "fhir/r4";

export const buildConceptMap = (
  resource: Omit<ConceptMap, "resourceType">
) => ({
  ...resource,
  resourceType: "ConceptMap",
});
