import { Group } from "fhir/r4";

export const buildGroup = (resource: Omit<Group, "resourceType">) => ({
  ...resource,
  resourceType: "Group",
});
