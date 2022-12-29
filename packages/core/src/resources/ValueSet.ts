import { ValueSet } from "fhir/r4";

export const buildValueSet = (resource: Omit<ValueSet, "resourceType">) => ({
  ...resource,
  resourceType: "ValueSet",
});
