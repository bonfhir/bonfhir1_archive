import { Flag } from "fhir/r4";

export const buildFlag = (resource: Omit<Flag, "resourceType">) => ({
  ...resource,
  resourceType: "Flag",
});
