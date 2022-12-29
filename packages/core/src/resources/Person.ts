import { Person } from "fhir/r4";

export const buildPerson = (resource: Omit<Person, "resourceType">) => ({
  ...resource,
  resourceType: "Person",
});
