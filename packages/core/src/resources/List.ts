import { List } from "fhir/r4";

export const buildList = (resource: Omit<List, "resourceType">) => ({
  ...resource,
  resourceType: "List",
});
